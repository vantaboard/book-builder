import styled from 'styled-components';
import { StyledBox } from 'components/Elements/Box/styles';
import * as tokens from 'style-dictionary-dist/variables';
import { Interactive } from 'components/Common/Interactive/styles';
import { ignoreClicks } from 'helpers/styling';

export const Wrapper = styled(StyledBox)`
  ${Interactive}
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
