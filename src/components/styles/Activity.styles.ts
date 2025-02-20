import styled from 'styled-components';

export const ActivityContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem;
`;

export const ActivityHeader = styled.header`
  max-width: 1000px;
  margin: 0 auto 3rem;
  padding: 0 1rem;

  h1 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1.1rem;
  }
`;

export const TicketsList = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const TicketCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.card};
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 25%;
    top: 0;
    height: 100%;
    width: 2px;
    background: ${({ theme }) => theme.colors.border};
    border-left: 2px dashed ${({ theme }) => theme.colors.primary}33;
  }

  .ticket-number {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.background};
    border-right: 2px dashed ${({ theme }) => theme.colors.border};

    .number {
      font-size: 1.8rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
    }

    .label {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.text.secondary};
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  .ticket-details {
    padding: 2rem;
    border-right: 2px dashed ${({ theme }) => theme.colors.border};

    .movie-name {
      font-size: 1.4rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text.primary};
      margin-bottom: 1rem;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin-top: 1rem;

      .info-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        
        .icon {
          color: ${({ theme }) => theme.colors.text.secondary};
        }

        .label {
          color: ${({ theme }) => theme.colors.text.secondary};
          font-size: 0.9rem;
        }

        .value {
          color: ${({ theme }) => theme.colors.text.primary};
          font-weight: 500;
          margin-left: 0.5rem;
        }
      }
    }
  }

  .ticket-price {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.background};

    .amount {
      font-size: 2rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
    }

    .label {
      color: ${({ theme }) => theme.colors.text.secondary};
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.card};

  .icon {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: 1.5rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: 2rem;
  }

  button {
    padding: 0.8rem 2rem;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.default};

    &:hover {
      background: ${({ theme }) => `${theme.colors.primary}dd`};
      transform: translateY(-1px);
    }
  }
`; 