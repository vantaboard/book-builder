import React from 'react';
import { InputProps } from './interface';
import { Prefix, StyledInput, Suffix, Wrapper } from './styles';

export default (props: InputProps) => {
  const { prefix, suffix, name, value } = props;
  return (
    <Wrapper>
      <Prefix>{prefix}</Prefix>
      <StyledInput name={name} placeholder={value} />
      <Suffix>{suffix}</Suffix>
    </Wrapper>
  );
};
