import { Interactive } from 'components/Common/Interactive/styles';
import * as tokens from 'style-dictionary-dist/variables';
import styled from 'styled-components';
import { ButtonProps } from './interface';

export const StyledButton = styled('button')<ButtonProps>`
  ${Interactive}
  z-index: 0;
  position: relative;
  border-radius: ${(p) =>
    p.interact ? tokens.BorderRadiusSmall : tokens.BorderRadiusBase};
  letter-spacing: 0.5px;
  text-align: center;
  padding-top: auto;
  padding-bottom: auto;
  padding-left: ${tokens.SpacingMedium};
  padding-right: ${tokens.SpacingMedium};
  margin-top: ${tokens.SpacingMedium};
  margin-bottom: ${tokens.SpacingMedium};
  margin-left: ${tokens.SpacingMedium};
  margin-right: ${tokens.SpacingMedium};
  height: ${tokens.SpacingLarge};
  width: auto;
  font-weight: ${tokens.TypographyWeightRegular};
  border-style: solid;
  border-width: ${tokens.BorderThicknessBase};
  border-color: ${tokens.PaletteBorder};
  color: ${(p) =>
    p.primary
      ? tokens.PaletteTypographyPrimary
      : tokens.PaletteTypographySecondary};
  background-color: ${(p) =>
    p.primary ? tokens.PaletteBasePrimary : tokens.PaletteBaseSecondary};
`;
