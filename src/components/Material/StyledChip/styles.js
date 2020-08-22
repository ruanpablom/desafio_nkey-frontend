import styled from 'styled-components';
import { Chip } from '@material-ui/core';

export const StyledChip = styled(Chip)`
  && {
    font-size: 1rem;
  }
  & + & {
    margin-left: 0.5rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.palette.secondary.main};
    color: ${(props) => props.theme.palette.primary.main};
    svg {
      color: ${(props) => props.theme.palette.primary.main};
    }
  }
`;
