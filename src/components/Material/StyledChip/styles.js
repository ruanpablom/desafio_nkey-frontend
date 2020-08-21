import styled from 'styled-components';
import { Chip } from '@material-ui/core';

export const StyledChip = styled(Chip)`
  && {
    margin-top: 10px;
    font-size: 1rem;
  }
  & + & {
    margin-left: 10px;
  }

  &:hover {
    background-color: ${(props) => props.theme.palette.secondary.main};
    color: ${(props) => props.theme.palette.primary.main};
  }
`;
