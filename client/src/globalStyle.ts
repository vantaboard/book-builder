import * as tokens from 'style-dictionary-dist/variables';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: ${tokens.TypographyFamilyBase};
    border-radius: 0;
    border: 0;
    padding: 0;
    margin: 0;
  }
`;