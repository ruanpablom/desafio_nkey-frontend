import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';
import { Footer, Header } from '../../components';

function PageLayout({ children }) {
  return (
    <>
      <Header />
      <Container>
        <Content>{children}</Content>
      </Container>
      <Footer label="© 2020 RPM DEV." />
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
