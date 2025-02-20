import React from 'react';
import { Navigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user } = useApp();

  if (!user.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
} 