export interface User {
  username: string;
  isAuthenticated: boolean;
}

export interface Movie {
  id: number;
  name: string;
  image: string;
  year: number;
}

export interface Ticket {
  id: number;
  movieId: number;
  userId: string;
  date: string;
} 