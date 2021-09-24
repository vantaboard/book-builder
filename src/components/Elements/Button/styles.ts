import { darken } from 'polished';
import styled from 'styled-components';
import { gray, theme } from '../../../theme';
import { ButtonProps } from './interface';

export const StyledButton = styled('button')<ButtonProps>`
  z-index: 0;
  position: relative;
  border-radius: ${(p) =>
    p.border ? theme.border.radius.small : theme.border.radius.base};
  transition: border-radius 0.2s ease-in-out, background-color 0.1s ease-in-out,
    box-shadow 0.2s ease-in-out;
  letter-spacing: 0.5px;
  text-align: center;
  padding-top: auto;
  padding-bottom: auto;
  padding-left: ${theme.spacing.medium};
  padding-right: ${theme.spacing.medium};
  margin-top: ${theme.spacing.small};
  margin-bottom: ${theme.spacing.small};
  margin-left: ${theme.spacing.medium};
  margin-right: ${theme.spacing.medium};
  height: ${theme.spacing.large};
  width: auto;
  font-family: ${theme.typography.font.base};
  font-weight: ${theme.typography.weight.regular};
  border-style: solid;
  border-width: 2px;
  border-color: ${gray[5]};
  &:focus {
    border-color: rgba(0, 0, 0, 0);
    outline: 4px solid ${theme.palette.focus.highlight};
  }
  &:hover {
    background-color: ${(p) =>
      p.primary
        ? darken(0.01, theme.palette.primary)
        : darken(0.01, theme.palette.secondary)};
    box-shadow: ${theme.shadows.box.soft.small};
  }
  color: ${(p) =>
    p.primary ? theme.typography.primary : theme.typography.secondary};
  background-color: ${(p) =>
    p.primary ? theme.palette.primary : theme.palette.secondary};
`;

export const SvgOverlay = styled('svg')<ButtonProps>`
  position: absolute;
  top: -5px;
  left: -5px;
  width: 110%;
  height: 140%;
  border-radius: ${(p) =>
    p.border ? theme.border.radius.small : theme.border.radius.base};
`;

export const StyledClickOverlay = styled('div')<ButtonProps>`
  z-index: -1;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
`;

export const Line = styled('path')<ButtonProps>`
  transition: ease-in-out ${(p) => (p.wipe ? '.5s' : '0s')} transform;
  transform: translate(
    ${(p) => (p.wipe ? '100%' : '-100%')},
    ${(p) => (p.wipe ? '-100%' : '100%')}
  );
`;
