import { handleInteract } from 'components/Common/Interactive/handlers';
import Wipe from 'components/Common/Interactive/Wipe';
import React, { HTMLAttributes } from 'react';
import { ButtonProps } from './interface';
import { StyledButton } from './styles';

export default (props: HTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  const { label, primary } = props;
  const { click, interact } = handleInteract();
  return (
    <StyledButton
      interact={interact}
      primary={primary}
      onClick={click}
    >
      {label}
      <Wipe interact={interact} />
    </StyledButton>
  );
};
