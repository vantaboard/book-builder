import styled from 'styled-components';
import {
  border,
  borderRadius,
  borderThickness,
  primary,
  secondary,
  spacing,
  typography,
  weight,
} from './../../../theme';
import { Interactive } from './../../Common/Interactive/styles';
import { ButtonProps } from './interface';

export const StyledButton = styled('button')<ButtonProps>`
  ${Interactive}
  z-index: 0;
  position: relative;
  border-radius: ${(p) => (p.border ? borderRadius.small : borderRadius.base)};
  letter-spacing: 0.5px;
  text-align: center;
  padding-top: auto;
  padding-bottom: auto;
  padding-left: ${spacing.medium};
  padding-right: ${spacing.medium};
  margin-top: ${spacing.small};
  margin-bottom: ${spacing.small};
  margin-left: ${spacing.medium};
  margin-right: ${spacing.medium};
  height: ${spacing.large};
  width: auto;
  font-weight: ${weight.regular};
  border-style: solid;
  border-width: ${borderThickness.base};
  border-color: ${border.color};
  color: ${(p) => (p.primary ? typography.primary : typography.secondary)};
  background-color: ${(p) => (p.primary ? primary : secondary)};
`;
