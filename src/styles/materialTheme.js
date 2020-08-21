import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#FFF',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#00b3db',
    },
    tertiary: {
      main: 'linear-gradient(to right,#674793 0%,#00b3db 100%)',
    },
    gradient: 'linear-gradient(to right,#674793 0%,#00b3db 100%)',
  },
});
