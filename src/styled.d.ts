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
        medium: string;
        semiBold: string;
        bold: string;
        extraBold: string;
      };
    };

    palette: {
      focus: {
        highlight: string;
      };
      primary: string;
      secondary: string;
      extended: {
        blue: [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string
        ];
        pink: [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string
        ];
        gray: [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string
        ];
      };
    };
  }
}
