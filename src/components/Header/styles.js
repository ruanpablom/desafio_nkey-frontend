import styled from 'styled-components';
import { Toolbar, AppBar } from '@material-ui/core';

export const StyledAppBar = styled(AppBar)`
  background: ${(props) => props.theme.palette.gradient};
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
  }

  strong {
    font-family: 'Poiret One', cursive;
    color: ${(props) => props.theme.palette.primary.main};
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
