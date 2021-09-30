import { createGlobalStyle } from 'styled-components';
import * as tokens from 'style-dictionary-dist/variables';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${tokens.TypographyFamilyBase};
    border-radius: 0;
    border: 0;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
