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

    animation: {
      speed: {
        setInterval: {
          webkit: string;
        };
        interactive: {
          slug: number;
          slow: number;
          mild: number;
          hyper: number;
          whoa: number;
        };
      };
    };

    border: {
      color: string;
      thickness: {
        base: string;
        small: string;
        medium: string;
        large: string;
      };
      radius: {
        base: string;
        small: string;
        medium: string;
        large: string;
      };
    };

    spacing: {
      tiny: string;
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
      background: {
        base: string;
        paper: string;
      };
    };
  }
}
