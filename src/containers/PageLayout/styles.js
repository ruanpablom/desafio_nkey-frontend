import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 58px);

  @media (min-width: 300px) {
    padding: 5rem 1rem 0 1rem;
  }

  @media (min-width: 720px) {
    padding: 5rem 10rem 0 10rem;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
