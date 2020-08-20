import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';

import apolloClient from './graphql';

import materialTheme from './styles/materialTheme';
import GlobalStyle from './styles/globalStyle';
import PageLayout from './containers/PageLayout';

import Routes from './routes';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={materialTheme}>
        <MuiThemeProvider theme={materialTheme}>
          <GlobalStyle />
          <BrowserRouter>
            <PageLayout>
              <Routes />
            </PageLayout>
          </BrowserRouter>
        </MuiThemeProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
