import { selectInteract } from 'features/interactAnimation/interactAnimationSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import ButtonBase from '../ButtonBase';
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

  const interact: boolean = useSelector(selectInteract);
  return (
    <Wrapper interact={interact}>
      <ButtonBase>
        <BuildInput
          prefix={prefix}
          prefixText={prefixText}
          suffix={suffix}
          suffixText={suffixText}
        >
          <StyledInput name={name} value={value} />
        </BuildInput>
      </ButtonBase>
    </Wrapper>
  );
};
