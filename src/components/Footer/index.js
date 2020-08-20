import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Footer({ label }) {
  return (
    <Container>
      <span>{label}</span>
    </Container>
  );
}

Footer.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Footer;
