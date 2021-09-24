import { darken } from 'polished';
import styled from 'styled-components';
import {
  borderRadius,
  borderThickness,
  font,
  gray,
  highlight,
  primary,
  secondary,
  shadows,
  spacing,
  speed,
  typography,
  weight,
} from './../../../theme';
import { ButtonProps } from './interface';

export const StyledButton = styled('button')<ButtonProps>`
  z-index: 0;
  position: relative;
  border-radius: ${(p) => (p.border ? borderRadius.small : borderRadius.base)};
  transition: border-radius ${speed.interactive.hyper} ease-in-out,
    background-color ${speed.interactive.hyper}s ease-in-out,
    box-shadow ${speed.interactive.hyper} ease-in-out;
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
  font-family: ${font.base};
  font-weight: ${weight.regular};
  border-style: solid;
  border-width: ${borderThickness.base};
  border-color: ${gray[5]};
  &:focus {
    border-color: unset;
    outline: ${borderThickness.medium} solid ${highlight};
  }
  &:hover {
    background-color: ${(p) =>
      p.primary ? darken(0.01, primary) : darken(0.01, secondary)};
    box-shadow: ${shadows.box.soft.small};
  }
  color: ${(p) => (p.primary ? typography.primary : typography.secondary)};
  background-color: ${(p) => (p.primary ? primary : secondary)};
`;

export const SvgOverlay = styled('svg')<ButtonProps>`
  border-radius: ${(p) => (p.border ? borderRadius.small : borderRadius.base)};
  position: absolute;
  height: 140%;
  width: 110%;
  left: -5px;
  top: -5px;
`;

export const StyledClickOverlay = styled('div')<ButtonProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  left: 0;
  top: 0;
`;

export const Line = styled('path')<ButtonProps>`
  transition: ease-in-out ${(p) => (p.wipe ? speed.interactive.mild : '0s')} transform;
  transform: translate(
    ${(p) => (p.wipe ? '100%' : '-100%')},
    ${(p) => (p.wipe ? '-100%' : '100%')}
  );
`;
