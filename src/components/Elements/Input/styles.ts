import styled from 'styled-components';
import { ignoreClicks } from '../../../helpers/styling';
import { StyledBox } from '../Box/styles';
import {
  background,
  border,
  borderRadius,
  borderThickness,
  spacing,
} from './../../../theme';
import { Interactive } from './../../Common/Interactive/styles';

export const Wrapper = styled(StyledBox)`
  ${Interactive}
  border-radius: ${borderRadius.base};
  border-width: calc(${borderThickness.base} + 1px);
  border-color: ${border.color};
  border-style: solid;
`;

export const Prefix = styled('span')`
  background-color: ${background.paper};
  padding: 2px ${spacing.small} 0;
  ${ignoreClicks}
`;

export const StyledInput = styled('input').attrs({ size: 4 })`
  background-color: ${background.base};
  padding: ${spacing.tiny} ${spacing.small};
  &:focus {
    border-color: unset;
    outline: unset;
  }
`;

export const Suffix = styled('span')`
  background-color: ${background.paper};
  padding: 2px ${spacing.small} 0;
  ${ignoreClicks}
`;
