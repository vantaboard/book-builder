import { theme } from './../../../theme';
const weight = theme.typography.weight;

export interface TypographyProps {
  weight?:
    | typeof weight.light
    | typeof weight.regular
    | typeof weight.bold
    | typeof weight.black;
}
