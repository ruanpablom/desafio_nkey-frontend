import styled from 'styled-components';
import { Card, CardContent, Modal, Button } from '@material-ui/core';
import { StyledChip } from '../../components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const StyledCard = styled(Card)`
  display: flex;
  width: 100%;

  & + & {
    margin-top: 0.7rem;
  }
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1``;

export const InfosContainer = styled.div`
  display: flex;
  margin-top: 1.2rem;
  justify-content: space-between;

  @media (min-width: 300px) {
    flex-direction: column;
  }

  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 300px) {
    width: 100%;
    margin-top: 1rem;
  }

  @media (min-width: 720px) {
    width: 33%;
  }

  small {
    font-size: 1rem;
    margin-bottom: 0.2rem;
    font-weight: bold;
  }
  .container {
    margin-top: 0.4rem;
  }
  span {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    svg {
      margin-right: 0.5rem;
    }
  }
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

export const Description = styled.div`
  margin-top: 1rem;
  white-space: pre-line;
`;

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeleteButton = styled(Button)`
  && {
    background: red;
    color: ${(props) => props.theme.palette.primary.main};
    font-size: 1rem;
    font-weight: bold;
    :hover {
      background: red;
    }
  }
`;

export { StyledChip };
