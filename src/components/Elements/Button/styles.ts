import styled from 'styled-components';
import { theme } from '../../../theme';
import { ButtonProps } from './interface';

export const StyledButton = styled('button')<ButtonProps>`
  border-radius: ${theme.border.radius.base};
  text-align: center;
  margin-top: ${theme.spacing.small};
  margin-bottom: ${theme.spacing.small};
  margin-left: ${theme.spacing.medium};
  margin-right: ${theme.spacing.medium};
  height: ${theme.spacing.large};
  width: calc(${theme.spacing.large} * 3);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  font-family: ${theme.typography.font.base};
  color: ${(p) =>
    p.primary ? theme.typography.primary : theme.typography.secondary};
  background-color: ${(p) =>
    p.primary ? theme.palette.primary : theme.palette.secondary};
`;
