export interface Movie {
  id: string;
  name: string;
  year: number;
  image: string;
}

export interface Ticket {
  id: string;
  movieName: string;
  ticketCount: number;
  time: string;
  date: string;
  amount: number;
}

export interface User {
  username: string;
  isAuthenticated: boolean;
} 