import styled from 'styled-components';

export const SelectionContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem;
`;

export const SelectionContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const MovieDetails = styled.div`
  .poster {
    position: relative;
    padding-top: 150%; // 3:2 aspect ratio
    border-radius: 12px;
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.shadows.card};
    
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info {
    margin-top: 1.5rem;
    
    h2 {
      color: ${({ theme }) => theme.colors.text.primary};
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }

    .year {
      color: ${({ theme }) => theme.colors.text.secondary};
      font-size: 1.1rem;
    }
  }
`;

export const BookingForm = styled.div`
  .form-title {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .form-group {
    margin-bottom: 1.5rem;

    label {
      display: block;
      color: ${({ theme }) => theme.colors.text.secondary};
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    input, select {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid ${({ theme }) => theme.colors.border};
      border-radius: 8px;
      background: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.text.primary};
      font-size: 1rem;
      transition: ${({ theme }) => theme.transitions.default};

      &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}33`};
      }
    }
  }

  .price-summary {
    margin: 2rem 0;
    padding: 1.5rem;
    background: ${({ theme }) => theme.colors.background};
    border-radius: 12px;

    .price-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      
      .label {
        color: ${({ theme }) => theme.colors.text.secondary};
      }
      
      .value {
        color: ${({ theme }) => theme.colors.text.primary};
        font-weight: 600;
      }
    }

    .total {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid ${({ theme }) => theme.colors.border};
      
      .label {
        font-size: 1.1rem;
      }
      
      .value {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  button {
    width: 100%;
    padding: 16px;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.default};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
      background: ${({ theme }) => `${theme.colors.primary}dd`};
      transform: translateY(-1px);
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.border};
      cursor: not-allowed;
      transform: none;
    }

    .loader {
      width: 20px;
      height: 20px;
      border: 2px solid #fff;
      border-bottom-color: transparent;
      border-radius: 50%;
      animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      to {
        transform: rotate(360deg);
      }
    }
  }
`; 