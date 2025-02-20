import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiHome, FiFilm, FiLogOut, FiGlobe } from 'react-icons/fi';
import { useApp } from '../context/AppContext';
import { SidebarContainer, SidebarContent, NavItem, BrandLogo } from './styles/Sidebar.styles';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useApp();

  const handleLogout = () => {
    setUser({ username: '', isAuthenticated: false });
    navigate('/login');
  };

  return (
    <SidebarContainer>
      <SidebarContent>
        <BrandLogo>
          <FiGlobe className="globe-icon" />
          <span>Almanack</span>
        </BrandLogo>

        <nav>
          <NavItem 
            $active={location.pathname === '/booking' || location.pathname === '/selection'} 
            onClick={() => navigate('/booking')}
          >
            <FiHome /> Booking
          </NavItem>
          <NavItem 
            $active={location.pathname === '/activity'} 
            onClick={() => navigate('/activity')}
          >
            <FiFilm /> Activity
          </NavItem>
        </nav>

        <NavItem className="logout" onClick={handleLogout}>
          <FiLogOut /> Logout
        </NavItem>
      </SidebarContent>
    </SidebarContainer>
  );
} 