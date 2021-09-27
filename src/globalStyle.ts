import { createGlobalStyle } from 'styled-components';
import { font } from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Chivo';
    border-radius: 0;
    border-color: 0;
    border-style: 0;
    border-width: 0;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
