import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    border: {
      radius: {
        base: string;
        small: string;
        medium: string;
        large: string;
      };
    };

    spacing: {
      small: string;
      medium: string;
      large: string;
    };

    typography: {
      primary: string;
      secondary: string;
      small: string;
      medium: string;
      large: string;
      font: { base: string; },
    };

    palette: {
      primary: string;
      secondary: string;
    };
  }
}
