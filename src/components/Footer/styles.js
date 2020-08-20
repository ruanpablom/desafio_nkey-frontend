import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  margin: 20px;

  span {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;
