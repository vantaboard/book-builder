import React from 'react';
import { BuildInputProps, InputProps } from './interface';
import { Prefix, StyledInput, Suffix, Wrapper } from './styles';

const BuildInput = (props: BuildInputProps) => {
  const { prefix, suffix, prefixText, suffixText, children } = props;

  const input: Array<JSX.Element> = [];
  if (prefix) input.push(<Prefix>{prefixText}</Prefix>);
  input.push(children as JSX.Element);
  if (suffix) input.push(<Suffix>{suffixText}</Suffix>);
  return <>{input}</>;
};

export default (props: InputProps) => {
  const { prefix, suffix, prefixText, suffixText, name, value } = props;
  return (
    <Wrapper>
      <BuildInput
        prefix={prefix}
        prefixText={prefixText}
        suffix={suffix}
        suffixText={suffixText}
      >
        <StyledInput name={name} placeholder={value} />
      </BuildInput>
    </Wrapper>
  );
};
