import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    shadows: {
      box: {
        soft: {
          small: string;
          medium: string;
          large: string;
        };
        hard: {
          small: string;
          medium: string;
          large: string;
        };
      };
    };

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
      base: string;
      small: string;
      medium: string;
      large: string;
      font: { base: string };
      weight: {
        light: string;
        regular: string;
        bold: string;
        black: string;
      };
    };

    palette: {
      focus: {
        highlight: string;
      };
      primary: string;
      secondary: string;
      extended: {
        blue: string[];
        pink: string[];
        gray: string[];
      };
    };
  }
}
