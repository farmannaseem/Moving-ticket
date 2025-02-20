import React from 'react';
import { 
  createBrowserRouter, 
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { AppProvider } from './context/AppContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Booking from './components/Booking';
import Selection from './components/Selection';
import Activity from './components/Activity';

// Add a global style
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export default function App(): React.ReactElement {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<ProtectedRoute children={<Booking />} />} />
        <Route path="/selection" element={<ProtectedRoute children={<Selection />} />} />
        <Route path="/activity" element={<ProtectedRoute children={<Activity />} />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppProvider>
        <RouterProvider router={router} />
        <Toaster position="top-center" />
      </AppProvider>
    </ThemeProvider>
  );
} 