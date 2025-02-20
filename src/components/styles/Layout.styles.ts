import styled from 'styled-components';

export const MainLayout = styled.div`
  padding: 20px 20px 20px 320px; // Added padding on all sides and adjusted for sidebar width + margin
`;

export const MainContent = styled.div`
  min-height: calc(100vh - 40px); // Adjusted for top and bottom margins
  background: ${({ theme }) => theme.colors.background};
  border-radius: 16px; // Added border radius to match sidebar
  padding: 2rem;
`; 