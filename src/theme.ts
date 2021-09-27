import * as tokens from './style-dictionary-dist/variables';

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

  animation: {
    speed: {
      setInterval: {
        webkit: tokens.AnimationSpeedSetIntervalWebkit,
      },
      interactive: {
        slug: tokens.AnimationSpeedInteractiveSlug,
        slow: tokens.AnimationSpeedInteractiveSlow,
        mild: tokens.AnimationSpeedInteractiveMild,
        hyper: tokens.AnimationSpeedInteractiveHyper,
        whoa: tokens.AnimationSpeedInteractiveWhoa,
      },
    },
  },

  border: {
    color: tokens.BorderColor,
    thickness: {
      base: tokens.BorderThicknessBase,
      small: tokens.BorderThicknessSmall,
      medium: tokens.BorderThicknessMedium,
      large: tokens.BorderThicknessLarge,
    },
    radius: {
      base: tokens.BorderRadiusBase,
      small: tokens.BorderRadiusSmall,
      medium: tokens.BorderRadiusMedium,
      large: tokens.BorderRadiusLarge,
    },
  },

  spacing: {
    tiny: tokens.SpacingTiny,
    small: tokens.SpacingSmall,
    medium: tokens.SpacingMedium,
    large: tokens.SpacingLarge,
  },

  typography: {
    lineHeight: {
      base: tokens.TypographyLineHeightBase,
      small: tokens.TypographyLineHeightSmall,
      medium: tokens.TypographyLineHeightMedium,
      large: tokens.TypographyLineHeightLarge,
    },
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
      bold: tokens.TypographyWeightBold,
      black: tokens.TypographyWeightBlack,
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
    background: {
      base: tokens.PaletteBackgroundBase,
      paper: tokens.PaletteBackgroundPaper,
    },
  },
};

export const gray = theme.palette.extended.gray;
export const blue = theme.palette.extended.blue;
export const pink = theme.palette.extended.pink;
export const shadows = theme.shadows;
export const border = theme.border;
export const borderThickness = theme.border.thickness;
export const borderRadius = theme.border.radius;
export const spacing = theme.spacing;
export const typography = theme.typography;
export const font = theme.typography.font;
export const weight = theme.typography.weight;
export const paletteFocus = theme.palette.focus;
export const highlight = theme.palette.focus.highlight;
export const primary = theme.palette.primary;
export const secondary = theme.palette.secondary;
export const background = theme.palette.background;
export const animation = theme.animation;
export const speed = theme.animation.speed;
