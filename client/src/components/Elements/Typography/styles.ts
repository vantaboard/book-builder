import styled from 'styled-components';
import { TypographyProps } from './interface';
import * as tokens from 'style-dictionary-dist/variables';

export const P = styled('p')<TypographyProps>`
  font-family: ${tokens.TypographyFamilyBase};
  font-weight: ${(p) => (p ? p.weight : tokens.TypographyWeightRegular)};
`;
