import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

interface ThemeProps {
  theme: DefaultTheme;
}

export const SidebarContainer = styled.div`
  width: 280px;
  height: calc(100vh - 40px);
  background: #1a1a1a;
  border-right: 1px solid #2a2a2a;
  position: fixed;
  left: 20px;
  top: 20px;
  padding: 2rem 0;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  nav {
    margin-top: 2rem;
    flex: 1;
    padding: 0 0.5rem;
  }

  .logout {
    margin: 1rem 0.5rem;
    color: #ff4d4d;
    border-radius: 8px;
    
    &:hover {
      background: rgba(255, 77, 77, 0.1);
      color: #ff6666;
    }
  }
`;

export const UserInfo = styled.div`
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  .avatar {
    width: 45px;
    height: 45px;
    border-radius: 12px;
    background: ${({ theme }: ThemeProps) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
  }

  .user-details {
    h3 {
      color: ${({ theme }) => theme.colors.text.primary};
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
`;

interface NavItemProps {
  $active?: boolean;
}

export const NavItem = styled.div<NavItemProps>`
  padding: 0.9rem 1.2rem;
  margin: 0.3rem 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${({ $active }) => $active ? '#fff' : 'rgba(255, 255, 255, 0.6)'};
  background: ${({ $active }) => $active ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: ${({ $active }) => $active ? '600' : '500'};
  border-radius: 10px;
  position: relative;

  ${({ $active }) => $active && `
    &::before {
      content: '';
      position: absolute;
      left: -0.7rem;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 20px;
      background: ${({ theme }: ThemeProps) => theme.colors.primary};
      border-radius: 0 4px 4px 0;
    }
  `}

  svg {
    font-size: 1.3rem;
    color: ${({ $active }) => $active ? '#fff' : 'rgba(255, 255, 255, 0.6)'};
    transition: all 0.3s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;

    svg {
      color: white;
    }
  }
`;

export const BrandLogo = styled.div`
  padding: 0 1.5rem 1.5rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;

  .globe-icon {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    letter-spacing: -0.5px;
  }
`; 