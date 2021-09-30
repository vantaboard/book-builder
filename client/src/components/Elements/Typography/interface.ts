import * as tokens from 'style-dictionary-dist/variables';

export interface TypographyProps {
  weight?:
    | typeof tokens.TypographyWeightLight
    | typeof tokens.TypographyWeightRegular
    | typeof tokens.TypographyWeightBold
    | typeof tokens.TypographyWeightBlack;
}
