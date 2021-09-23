import styled from 'styled-components';
import { gray, theme } from '../../../theme';
import { ButtonProps } from './interface';

export const StyledButton = styled('button')<ButtonProps>`
  position: relative;
  border-radius: ${(p) => (p.active ? 0 : theme.border.radius.base)};
  transition: ease-in-out 0.2s border-radius;
  text-align: center;
  margin-top: ${theme.spacing.small};
  margin-bottom: ${theme.spacing.small};
  margin-left: ${theme.spacing.medium};
  margin-right: ${theme.spacing.medium};
  height: ${theme.spacing.large};
  width: calc(${theme.spacing.large} * 3);
  box-shadow: ${theme.shadows.box.soft.medium};
  font-family: ${theme.typography.font.base};
  font-weight: ${theme.typography.weight.bold};
  border-style: solid;
  border-width: 2px;
  border-color: ${gray[7]};
  &:focus {
    border: 0;
    outline: 3px solid ${theme.palette.focus.highlight};
  }
  color: ${(p) =>
    p.primary ? theme.typography.primary : theme.typography.secondary};
  background-color: ${(p) =>
    p.primary ? theme.palette.primary : theme.palette.secondary};
`;

export const StyledClickOverlay = styled('div')<ButtonProps>`
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
  border-radius: ${(p) => (p.active ? 0 : theme.border.radius.base)};
`;
