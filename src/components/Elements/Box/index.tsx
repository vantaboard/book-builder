import React from 'react';
import { StyledBox } from './styles';

export default (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { children } = props;
  return <StyledBox>{children}</StyledBox>;
};
