import styled from 'styled-components';
import { Card, CardContent } from '@material-ui/core';
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
  margin-top: 20px;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  width: 33%;
  flex-direction: column;

  small {
    font-size: 0.9rem;
    margin-bottom: 0.2rem;
  }
  .container {
    margin-top: 0.4rem;
  }
  span {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Description = styled.div`
  margin-top: 1rem;
`;

export { StyledChip };
