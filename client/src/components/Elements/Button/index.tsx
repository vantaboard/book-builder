import Wipe from 'components/Common/Interactive/Wipe';
import React, { HTMLAttributes, useState } from 'react';
import { ButtonProps } from './interface';
import { StyledButton } from './styles';
import * as tokens from 'style-dictionary-dist/variables';

// TODO: Animate button with React-spring
export default (props: HTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  const [interact, setBorder] = useState(false);
  const handleClick = () => {
    setWipe(false);
    setWipe(true);
    const int = setInterval(() => {
      setWipe(false);
      clearInterval(int);
    }, tokens.AnimationSpeedInteractiveHyper * 1000);
  };
  const { label, primary } = props;

  return (
    <StyledButton border={border} wipe={wipe} primary={primary} onClick={handleClick}>
      {label}
      <Wipe border={border} wipe={wipe} />
    </StyledButton>
  );
};
