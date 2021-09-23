import styled from 'styled-components';
import { theme } from '../../../theme';
import { TypographyProps } from './interface';

export const P = styled('p')<TypographyProps>`
  font-family: ${theme.typography.font.base};
  font-weight: ${(p) => (p ? p.weight : theme.typography.weight.regular)};
`;
