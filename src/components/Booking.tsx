import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { FiSearch, FiLogOut, FiUser } from 'react-icons/fi';
import { DUMMY_MOVIES } from '../data/movies';
import { 
  BookingContainer, 
  Header,
  SearchBar, 
  MovieGrid, 
  MovieCard,
  NavHeader
} from './styles/Booking.styles';

export default function Booking() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { setSelectedMovie, user, setUser } = useApp();

  const filteredMovies = DUMMY_MOVIES.filter(movie =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie);
    navigate('/selection');
  };

  const handleLogout = () => {
    setUser({ username: '', isAuthenticated: false });
    navigate('/login');
  };

  return (
    <BookingContainer>
      <NavHeader>
        <div className="nav-content">
          <div className="logo">
            MovieTickets
          </div>
          <div className="user-section">
            <div className="user-info">
              <div className="username">
                <FiUser /> {user.username}
              </div>
              <div className="role">Member</div>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              <FiLogOut className="icon" />
              Logout
            </button>
          </div>
        </div>
      </NavHeader>

      <Header>
        <h1>Movie Selection</h1>
      </Header>
      
      <SearchBar>
        <FiSearch />
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchBar>
      
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