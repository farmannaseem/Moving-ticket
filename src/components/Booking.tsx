import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { FiUser } from 'react-icons/fi';
import { DUMMY_MOVIES } from '../data/movies';
import { Movie } from '../types/types';
import Header from './Header';
import { 
  BookingContainer, 
  Header as BookingHeader,
  MovieGrid, 
  MovieCard,
  UserSection
} from './styles/Booking.styles';

export default function Booking() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { setSelectedMovie } = useApp();

  const filteredMovies = DUMMY_MOVIES.filter(movie =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie);
    navigate('/selection');
  };

  return (
    <BookingContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <UserSection>
          <div className="user-info">
            <div className="avatar">
              <FiUser />
            </div>
            <div className="username">
              <span className="name">Naval</span>
              <span className="handle">ravikant</span>
            </div>
          </div>
        </UserSection>
      </div>

      <BookingHeader>
        <h1>Good Morning Mr. Naval Ravikant</h1>
      </BookingHeader>
      
      <MovieGrid>
        {filteredMovies.map(movie => (
          <MovieCard 
            key={movie.id} 
            onClick={() => handleMovieSelect(movie)}
          >
            <div className="image-container">
              <img src={movie.image} alt={movie.name} />
            </div>
            <div className="content">
              <h3>{movie.name}</h3>
              <span className="year">{movie.year}</span>
            </div>
          </MovieCard>
        ))}
      </MovieGrid>
    </BookingContainer>
  );
} 