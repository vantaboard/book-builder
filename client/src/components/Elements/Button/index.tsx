import React, { HTMLAttributes, useState } from 'react';
import { speed } from '../../../theme';
import Wipe from '../../Common/Interactive/Wipe';
import { ButtonProps } from './interface';
import { StyledButton } from './styles';

// TODO: Animate button with React-spring
export default (props: HTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  const [interact, setBorder] = useState(false);
  const handleClick = () => {
    setWipe(false);
    setWipe(true);
    const int = setInterval(() => {
      setWipe(false);
      clearInterval(int);
    }, speed.interactive.hyper * 1000);
  };
  const { label, primary } = props;

  return (
    <StyledButton border={border} wipe={wipe} primary={primary} onClick={handleClick}>
      {label}
      <Wipe border={border} wipe={wipe} />
    </StyledButton>
  );
};
