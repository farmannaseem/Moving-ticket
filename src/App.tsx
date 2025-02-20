import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { AppProvider } from "./context/AppContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Booking from "./components/Booking";
import Selection from "./components/Selection";
import Activity from "./components/Activity";
import { MainLayout, MainContent } from "./components/styles/Layout.styles";

import { createGlobalStyle } from "styled-components";

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

  // Add these for better contrast in the light theme
  input, select, textarea {
    background: white !important;
    border-color: ${({ theme }) => theme.colors.border} !important;
  }

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </MainLayout>
  );
}

export default function App(): React.ReactElement {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/login" element={<Login />} />
        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <Layout>
                <Booking />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/selection"
          element={
            <ProtectedRoute>
              <Layout>
                <Selection />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/activity"
          element={
            <ProtectedRoute>
              <Layout>
                <Activity />
              </Layout>
            </ProtectedRoute>
          }
        />
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
