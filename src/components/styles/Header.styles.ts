import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
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