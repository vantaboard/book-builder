import { Interactive } from 'components/Common/Interactive/styles';
import { StyledBox } from 'components/Elements/Box/styles';
import { ignoreClicks } from 'helpers/styling';
import * as tokens from 'style-dictionary-dist/variables';
import styled from 'styled-components';
import { InteractiveProps } from '../../Common/Interactive/interface';

export const Wrapper = styled(StyledBox)<InteractiveProps>`
  ${Interactive}
  border-radius: ${tokens.BorderRadiusSmall};
  border-width: calc(${tokens.BorderThicknessSmall} + 1px);
  border-color: ${tokens.PaletteBorder};
  color: ${tokens.PaletteTypographySecondary};
  border-style: solid;
  &:focus-within {
    border-radius: ${(p) =>
      p.interact ? tokens.BorderRadiusSmall : tokens.BorderRadiusBase};
  }
`;

export const Prefix = styled('span')`
  background-color: ${tokens.PaletteBackgroundPaper};
  padding: 2px ${tokens.SpacingSmall} 0;
  ${ignoreClicks}
`;

export const Suffix = Prefix;

export const StyledInput = styled('input').attrs({ size: 4 })`
  border: 0;
  background-color: ${tokens.PaletteBackgroundBase};
  padding: ${tokens.SpacingTiny} ${tokens.SpacingSmall};
  &:focus {
    outline: unset;
  }
`;
