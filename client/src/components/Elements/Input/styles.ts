import { InteractiveBox } from 'components/Common/Interactive/InteractiveBox/styles';
import { InteractiveProps } from 'components/Common/Interactive/interface';
import { Interactive } from 'components/Common/Interactive/styles';
import { ignoreClicks } from 'helpers/styling';
import * as tokens from 'style-dictionary-dist/variables';
import styled from 'styled-components';

export const Wrapper = styled(InteractiveBox)<InteractiveProps>`
  ${Interactive}
  border-radius: ${(p) =>
    p.interact ? tokens.BorderRadiusSmall : tokens.BorderRadiusBase};
  border-radius: ${tokens.BorderRadiusSmall};
  border-width: calc(${tokens.BorderThicknessSmall} + 1px);
  border-color: ${tokens.PaletteBorder};
  color: ${tokens.PaletteTypographySecondary};
  border-style: solid;
`;

export const Prefix = styled('span')`
  background-color: ${tokens.PaletteBackgroundPaper};
  padding: 2px ${tokens.SpacingSmall} 0;
  ${ignoreClicks}
`;

export const Suffix = Prefix;

export const StyledInput = styled('input').attrs({ size: 4 })`
  background-color: ${tokens.PaletteBackgroundBase};
  padding: ${tokens.SpacingTiny} ${tokens.SpacingSmall};
  &:focus {
    border-color: unset;
    outline: unset;
  }
`;
