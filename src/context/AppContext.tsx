import React, { createContext, useContext, useState, useEffect } from 'react';
import { Movie, Ticket, User } from '../types/types';

interface AppContextType {
  user: User;
  setUser: (user: User) => void;
  tickets: Ticket[];
  addTicket: (ticket: Ticket) => void;
  selectedMovie: Movie | null;
  setSelectedMovie: (movie: Movie | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [user, setUser] = useState<User>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : { username: '', isAuthenticated: false };
  });

  const [tickets, setTickets] = useState<Ticket[]>(() => {
    const savedTickets = localStorage.getItem('tickets');
    return savedTickets ? JSON.parse(savedTickets) : [];
  });

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('tickets', JSON.stringify(tickets));
  }, [tickets]);

  const addTicket = (ticket: Ticket) => {
    setTickets(prev => [...prev, ticket]);
  };

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      tickets,
      addTicket,
      selectedMovie,
      setSelectedMovie,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
} 