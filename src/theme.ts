import * as tokens from './style-dictionary-dist/variables';

// Define what props.theme will look like
export const theme = {
  border: {
    radius: {
      base: tokens.BorderRadiusBase,
      small: tokens.BorderRadiusSmall,
      medium: tokens.BorderRadiusMedium,
      large: tokens.BorderRadiusLarge,
    },
  },

  spacing: {
    small: tokens.SpacingSmall,
    medium: tokens.SpacingMedium,
    large: tokens.SpacingLarge,
  },

  typography: {
    primary: tokens.PaletteTextPrimary,
    secondary: tokens.PaletteTextSecondary,
    base: tokens.SizeTextBase,
    small: tokens.SizeTextSmall,
    medium: tokens.SizeTextMedium,
    large: tokens.SizeTextLarge,
    font: { base: tokens.TypographyFamilyBase },
  },

  palette: {
    primary: tokens.PaletteBasePrimary,
    secondary: tokens.PaletteBaseSecondary,
  },
};
