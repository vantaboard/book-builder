import React, { HTMLAttributes } from 'react';
import { TypographyProps } from './interface';
import { P } from './styles';

export default (
  props: HTMLAttributes<HTMLParagraphElement> & TypographyProps
) => {
  const { children, weight } = props;
  return <P weight={weight}>{children}</P>;
};
