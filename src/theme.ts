import * as tokens from './style-dictionary-dist/variables';

// Define what props.theme will look like
export const theme = {
  shadows: {
    box: {
      soft: {
        small: tokens.ShadowsBoxSoftSmall,
        medium: tokens.ShadowsBoxSoftMedium,
        large: tokens.ShadowsBoxSoftLarge,
      },
      hard: {
        small: tokens.ShadowsBoxHardSmall,
        medium: tokens.ShadowsBoxHardMedium,
        large: tokens.ShadowsBoxHardLarge,
      },
    },
  },

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
    weight: {
      light: tokens.TypographyWeightLight,
      regular: tokens.TypographyWeightRegular,
      medium: tokens.TypographyWeightMedium,
      semiBold: tokens.TypographyWeightSemiBold,
      bold: tokens.TypographyWeightBold,
      extraBold: tokens.TypographyWeightExtraBold,
    },
  },

  palette: {
    focus: {
      highlight: tokens.PaletteFocusHighlight,
    },
    primary: tokens.PaletteBasePrimary,
    secondary: tokens.PaletteBaseSecondary,
    extended: {
      blue: [
        tokens.PaletteExtendedBlue0,
        tokens.PaletteExtendedBlue1,
        tokens.PaletteExtendedBlue2,
        tokens.PaletteExtendedBlue3,
        tokens.PaletteExtendedBlue4,
        tokens.PaletteExtendedBlue5,
        tokens.PaletteExtendedBlue6,
        tokens.PaletteExtendedBlue7,
        tokens.PaletteExtendedBlue8,
        tokens.PaletteExtendedBlue9,
      ],
      pink: [
        tokens.PaletteExtendedPink0,
        tokens.PaletteExtendedPink1,
        tokens.PaletteExtendedPink2,
        tokens.PaletteExtendedPink3,
        tokens.PaletteExtendedPink4,
        tokens.PaletteExtendedPink5,
        tokens.PaletteExtendedPink6,
        tokens.PaletteExtendedPink7,
        tokens.PaletteExtendedPink8,
        tokens.PaletteExtendedPink9,
      ],
      gray: [
        tokens.PaletteExtendedGray0,
        tokens.PaletteExtendedGray1,
        tokens.PaletteExtendedGray2,
        tokens.PaletteExtendedGray3,
        tokens.PaletteExtendedGray4,
        tokens.PaletteExtendedGray5,
        tokens.PaletteExtendedGray6,
        tokens.PaletteExtendedGray7,
        tokens.PaletteExtendedGray8,
        tokens.PaletteExtendedGray9,
      ],
    },
  },
};

export const gray = theme.palette.extended.gray;
export const blue = theme.palette.extended.blue;
export const pink = theme.palette.extended.pink;
