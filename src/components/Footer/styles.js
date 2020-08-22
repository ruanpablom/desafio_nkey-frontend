import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  margin: 1rem;

  span {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;
