import * as tokens from 'style-dictionary-dist/variables';
export const Interactive = `
  transition: border-radius ${tokens.AnimationSpeedInteractiveHyper}s ease-in-out,
    background-color ${tokens.AnimationSpeedInteractiveHyper}s ease-in-out,
    box-shadow ${tokens.AnimationSpeedInteractiveHyper}s ease-in-out;
  &:focus-within {
    border-color: ${tokens.PaletteFocusHighlight};
    outline: ${tokens.BorderThicknessSmall} solid ${tokens.PaletteFocusHighlight};
    box-shadow: ${tokens.ShadowsBoxSoftSmall};
  }
  &:hover {
    box-shadow: ${tokens.ShadowsBoxSoftSmall};
  }
`;
