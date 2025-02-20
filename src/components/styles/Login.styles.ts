import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    transform: skewY(-5deg) translateY(-100px);
  }
`;

export const LoginForm = styled.form`
  width: 100%;
  max-width: 420px;
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.6s ease;
  position: relative;
  z-index: 1;

  .header {
    text-align: center;
    margin-bottom: 2.5rem;

    h1 {
      color: ${({ theme }) => theme.colors.text.primary};
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    p {
      color: ${({ theme }) => theme.colors.text.secondary};
      font-size: 0.95rem;
    }
  }

  .input-group {
    margin-bottom: 1.5rem;
    position: relative;

    label {
      display: block;
      color: ${({ theme }) => theme.colors.text.primary};
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .input-wrapper {
      position: relative;

      input {
        width: 100%;
        padding: 12px 16px;
        padding-left: 40px;
        background: ${({ theme }) => theme.colors.background};
        border: 2px solid ${({ theme }) => theme.colors.border};
        border-radius: 10px;
        color: ${({ theme }) => theme.colors.text.primary};
        font-size: 1rem;
        transition: all 0.3s ease;

        &::placeholder {
          color: ${({ theme }) => theme.colors.text.secondary};
          opacity: 0.7;
        }

        &:focus {
          outline: none;
          border-color: ${({ theme }) => theme.colors.primary};
          box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}33`};
        }
      }

      .icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: ${({ theme }) => theme.colors.text.secondary};
        font-size: 1.2rem;
      }
    }
  }

  button {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 2rem;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px ${({ theme }) => `${theme.colors.primary}66`};
    }

    &:active {
      transform: translateY(0);
    }
  }
`; 