import styled from 'styled-components';
import Box from '../Box';
import {
  background,
  border,
  borderRadius,
  borderThickness,
  shadows,
  spacing,
} from './../../../theme';

const ignoreClicks = () => `
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Wrapper = styled(Box)`
  border-width: ${borderThickness.base};
  border-radius: ${borderRadius.base};
  border-color: ${border.color};
  border-style: solid;
  justify-content: space-around;
  width: calc(100% + 2rem);
  box-shadow: ${shadows.box.soft.small};
`;

export const Prefix = styled('span')`
  background-color: ${background.paper};
  padding: 0 ${spacing.small};
  ${ignoreClicks}
`;

export const StyledInput = styled('input')`
  background-color: ${background.base};
  padding: ${spacing.tiny} ${spacing.small};
  height: auto;
  width: calc(100% + 2rem);
`;

export const Suffix = styled('span')`
  background-color: ${background.paper};
  padding: 0 ${spacing.small};
  ${ignoreClicks}
`;
