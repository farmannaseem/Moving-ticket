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
  padding: 2rem;
`;

export const LoginCard = styled.div`
  width: 100%;
  max-width: 340px;
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 1.8rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  .logo {
    span {
      color: white;
    }
  }

  input {
    background: white !important;
    border-color: #2a2a2a !important;
    color: #333 !important;
    padding: 10px 16px;
    padding-left: 40px;

    &::placeholder {
      color: #999;
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary} !important;
      box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}33`};
    }
  }

  .icon {
    color: #666 !important;
    font-size: 1rem;
  }
`;

export const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    .globe-icon {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.primary};
      display: flex;
    }

    span {
      font-size: 1.6rem;
      font-weight: 700;
      color: white;
      letter-spacing: -0.5px;
      line-height: 1;
      display: flex;
      align-items: center;
    }
  }
`;

export const LoginForm = styled.form`
  .form-group {
    margin-bottom: 1.2rem;

    .input-wrapper {
      position: relative;

      .icon {
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        color: #666;
        font-size: 1.1rem;
        z-index: 1;
      }

      input {
        width: 100%;
        padding: 12px 16px;
        padding-left: 45px;
        border: 2px solid #2a2a2a;
        border-radius: 8px;
        background: white !important;
        color: #333 !important;
        font-size: 0.95rem;
        transition: ${({ theme }) => theme.transitions.default};

        &::placeholder {
          color: #999;
        }

        &:focus {
          outline: none;
          border-color: ${({ theme }) => theme.colors.primary};
          box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}33`};
        }
      }
    }
  }

  button {
    width: 100%;
    padding: 12px;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.default};
    margin-top: 0.5rem;

    &:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }
  }
`; 