import styled from 'styled-components';
import { Form } from '@unform/web';
import { Card } from '@material-ui/core';
import { TextField, StyledChip } from '../../components';

export const StyledCard = styled(Card)`
  max-width: 500px;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
`;

export const StyledForm = styled(Form)`
  && {
    display: flex;
    flex-direction: column;

    .fields-description {
      margin: 1rem 0 0.5rem;
    }

    .submit {
      font-weight: bold;
      font-size: 1rem;
      margin-top: 1rem;
    }
  }
`;

export const Input = styled(TextField)`
  & + & {
    margin-top: 1rem;
  }
`;

export const SalaryRangeContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const RequirementsContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;

  button {
    margin-left: 1rem;
    background: ${(props) => props.theme.palette.secondary.main};

    :hover {
      background: ${(props) => props.theme.palette.secondary.main};
    }
  }
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export { StyledChip };
