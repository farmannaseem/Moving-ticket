import styled from 'styled-components';

export const BookingContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem;
`;

export const Header = styled.header`
  max-width: 1200px;
  margin: 0 auto 3rem;
  padding: 0 1rem;

  h1 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const SearchBar = styled.div`
  max-width: 600px;
  margin: 0 auto 3rem;
  position: relative;
  
  input {
    width: 100%;
    padding: 16px 24px;
    padding-left: 50px;
    border-radius: 12px;
    border: 2px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.1rem;
    transition: ${({ theme }) => theme.transitions.default};

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.secondary};
    }

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}33`};
    }
  }

  svg {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1.2rem;
  }
`;

export const MovieGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

export const MovieCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.card};

  .image-container {
    position: relative;
    padding-top: 150%;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: ${({ theme }) => theme.transitions.default};
    }
  }

  .content {
    padding: 1.5rem;

    h3 {
      color: ${({ theme }) => theme.colors.text.primary};
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    .year {
      color: ${({ theme }) => theme.colors.text.secondary};
      font-size: 0.9rem;
    }
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.hover};

    img {
      transform: scale(1.05);
    }
  }
`;

export const NavHeader = styled.nav`
  background: ${({ theme }) => theme.colors.surface};
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.5rem;
    font-weight: 600;
  }

  .user-section {
    display: flex;
    align-items: center;
    gap: 1rem;

    .user-info {
      text-align: right;

      .username {
        color: ${({ theme }) => theme.colors.text.primary};
        font-weight: 500;
      }

      .role {
        color: ${({ theme }) => theme.colors.text.secondary};
        font-size: 0.8rem;
      }
    }

    .logout-btn {
      padding: 0.5rem 1rem;
      background: ${({ theme }) => theme.colors.error};
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: ${({ theme }) => theme.transitions.default};

      &:hover {
        background: ${({ theme }) => `${theme.colors.error}dd`};
        transform: translateY(-1px);
      }

      .icon {
        font-size: 1.1rem;
      }
    }
  }
`; 