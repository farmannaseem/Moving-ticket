import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  FiCalendar, 
  FiClock, 
  FiArchive,
  FiUsers, 
  FiFilm 
} from 'react-icons/fi';
import {
  ActivityContainer,
  ActivityHeader,
  TicketsList,
  TicketCard,
  EmptyState
} from './styles/Activity.styles';

export default function Activity() {
  const { tickets } = useApp();
  const navigate = useNavigate();

  if (tickets.length === 0) {
    return (
      <ActivityContainer>
        <ActivityHeader>
          <h1>My Bookings</h1>
        </ActivityHeader>
        <EmptyState>
          <FiArchive className="icon" />
          <h3>No Bookings Found</h3>
          <p>You haven't booked any movie tickets yet.</p>
          <button onClick={() => navigate('/booking')}>Book Tickets</button>
        </EmptyState>
      </ActivityContainer>
    );
  }

  return (
    <ActivityContainer>
      <ActivityHeader>
        <h1>My Bookings</h1>
        <p>Your movie ticket booking history</p>
      </ActivityHeader>
      
      <TicketsList>
        {tickets.map((ticket, index) => (
          <TicketCard key={ticket.id}>
            <div className="ticket-number">
              <span className="number">#{String(index + 1).padStart(2, '0')}</span>
              <span className="label">Ticket</span>
            </div>

            <div className="ticket-details">
              <h3 className="movie-name">{ticket.movieName}</h3>
              <div className="info-grid">
                <div className="info-item">
                  <FiUsers className="icon" />
                  <span className="label">Tickets:</span>
                  <span className="value">{ticket.ticketCount}</span>
                </div>
                <div className="info-item">
                  <FiClock className="icon" />
                  <span className="label">Time:</span>
                  <span className="value">{ticket.time}</span>
                </div>
                <div className="info-item">
                  <FiCalendar className="icon" />
                  <span className="label">Date:</span>
                  <span className="value">{ticket.date}</span>
                </div>
                <div className="info-item">
                  <FiFilm className="icon" />
                  <span className="label">Booking ID:</span>
                  <span className="value">{ticket.id.slice(-6).toUpperCase()}</span>
                </div>
              </div>
            </div>

            <div className="ticket-price">
              <span className="amount">${ticket.amount}</span>
              <span className="label">Total Amount</span>
            </div>
          </TicketCard>
        ))}
      </TicketsList>
    </ActivityContainer>
  );
} 