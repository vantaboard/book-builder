import { InteractiveProps } from 'components/Common/Interactive/interface';
import { Interactive } from 'components/Common/Interactive/styles';
import * as tokens from 'style-dictionary-dist/variables';
import styled from 'styled-components';
import { ButtonProps } from '../Button/interface';
import { StyledButtonBase } from '../ButtonBase/styles';

export const StyledButton = styled(StyledButtonBase)<
  ButtonProps & InteractiveProps
>`
  ${Interactive}
  border-radius: ${tokens.BorderRadiusSmall};
  z-index: 0;
  position: relative;
  letter-spacing: 0.5px;
  text-align: center;
  padding-top: 0.25rem;
  padding-bottom: 0px;
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
  &:focus-within {
    border-radius: ${(p) =>
      p.interact ? tokens.BorderRadiusSmall : tokens.BorderRadiusBase};
  }
`;
