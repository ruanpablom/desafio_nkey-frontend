import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poiret One', cursive;
  }
  html, body, #root {
    min-height: 100vh;
  }
  
  body{
    background: ${(props) => props.theme.palette.gradient};
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button{
    font-size: 1rem;
  }

  button{
    cursor: pointer;
  }
`;
