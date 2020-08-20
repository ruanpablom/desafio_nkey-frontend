import React from 'react';
import { Link } from 'react-router-dom';

import { StyledAppBar, StyledToolbar } from './styles';

function Header() {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <Link to="/">
          <strong>Jobs Opportunity</strong>
        </Link>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;
