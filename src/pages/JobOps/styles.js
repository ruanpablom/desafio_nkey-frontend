import styled from 'styled-components';
import { Card, IconButton } from '@material-ui/core';
import { StyledChip } from '../../components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddButton = styled(IconButton)`
  && {
    background: ${(props) => props.theme.palette.secondary.main};
    margin-bottom: 1rem;

    :hover {
      background: ${(props) => props.theme.palette.secondary.main};
    }
  }
`;

export const JobOpsList = styled.div`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
  }
`;

export const JobOp = styled.div`
  & + & {
    margin-top: 20px;
  }
`;

export const StyledCard = styled(Card)`
  display: flex;

  @media (min-width: 300px) {
    width: 300px;
  }

  @media (min-width: 720px) {
    width: 500px;
  }

  &:hover {
    box-shadow: 0px 6px 11px 0px rgba(50, 50, 50, 1);
  }
`;

export const Title = styled.strong`
  font-size: 1.5rem;
`;

export const Location = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  span {
    font-weight: bold;
  }
`;

export const Salary = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  span {
    font-weight: bold;
    font-size: 0.8rem;
  }
`;

export const Description = styled.div`
  word-wrap: break-word;
  margin-top: 10px;

  span,
  #desc {
    display: block;
    overflow: hidden;
    max-height: 110px;
    display: box;
  }
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export { StyledChip };
