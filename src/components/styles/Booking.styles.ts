import styled from 'styled-components';

export const BookingContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  padding: 1.5rem;
`;

export const Header = styled.header`
  max-width: 1200px;
  margin: 0 auto 1.5rem;
  padding: 0 0.8rem;

  h1 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: clamp(1.4rem, 2vw, 1.8rem);
    font-weight: 600;
    margin-bottom: 0.8rem;
  }
`;

export const SearchBar = styled.div`
  max-width: 600px;
  position: relative;
  
  input {
    width: 100%;
    padding: 12px 20px;
    padding-right: 45px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1rem;
    transition: ${({ theme }) => theme.transitions.default};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}33`};
    }
  }

  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const MovieGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.2rem;
  padding: 0.8rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
  }
`;

export const MovieCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.card};

  .image-container {
    position: relative;
    padding-top: 140%;
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
    padding: 1rem;

    h3 {
      font-size: 1rem;
      margin-bottom: 0.3rem;
      font-weight: 600;
    }

    .year {
      font-size: 0.8rem;
    }
  }

  &:hover {
    transform: translateY(-4px);

    img {
      transform: scale(1.05);
    }
  }
`;

export const NavHeader = styled.nav`
  padding: 1rem 2rem;
  margin-bottom: 2rem;

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
  }

  .user-section {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    background: ${({ theme }) => theme.colors.surface};
    border-radius: 12px;
    box-shadow: ${({ theme }) => theme.shadows.card};
    transition: ${({ theme }) => theme.transitions.default};

    &:hover {
      transform: translateY(-1px);
      box-shadow: ${({ theme }) => theme.shadows.hover};
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 12px;

      .avatar {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.primary};
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 20px;
          height: 20px;
          color: white;
        }
      }

      .username {
        color: ${({ theme }) => theme.colors.text.primary};
        font-size: 0.95rem;
        font-weight: 600;
      }
    }
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 10px;

  .user-info {
    display: flex;
    align-items: center;
    gap: 8px;

    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.primary};
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      box-shadow: 0 2px 8px ${({ theme }) => `${theme.colors.primary}40`};
      overflow: hidden;

      svg {
        width: 16px;
        height: 16px;
        color: white;
        stroke-width: 2;
      }
    }

    .username {
      display: flex;
      flex-direction: column;
      gap: 1px;

      .name {
        color: ${({ theme }) => theme.colors.text.primary};
        font-size: 0.85rem;
        font-weight: 700;
        letter-spacing: -0.3px;
      }

      .handle {
        color: ${({ theme }) => theme.colors.text.secondary};
        font-size: 0.7rem;
        font-weight: 500;
      }
    }
  }

  @media (max-width: 768px) {
    .user-info {
      .username {
        .name {
          font-size: 0.8rem;
        }
        .handle {
          font-size: 0.65rem;
        }
      }
    }
  }
`; 