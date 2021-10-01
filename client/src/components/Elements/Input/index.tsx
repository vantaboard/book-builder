import { handleInteract } from 'components/Common/Interactive/handlers';
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
  const { click, interact } = handleInteract();
  return (
    <Wrapper interact={interact}>
      <BuildInput
        prefix={prefix}
        prefixText={prefixText}
        suffix={suffix}
        suffixText={suffixText}
      >
        <StyledInput onClick={click} name={name} value={value} />
      </BuildInput>
    </Wrapper>
  );
};
