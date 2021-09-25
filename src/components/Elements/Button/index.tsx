import React, { HTMLAttributes, useState } from 'react';
import { speed } from '../../../theme';
import Wipe from '../../Common/Interactive/Wipe';
import { ButtonProps } from './interface';
import { StyledButton } from './styles';

// TODO: Animate button with React-spring
export default (props: HTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  const [border, setBorder] = useState(false);
  const [wipe, setWipe] = useState(false);
  const handleClick = () => {
    setBorder(false);
    setWipe(false);
    setBorder(true);
    setWipe(true);
    const int = setInterval(() => {
      setBorder(false);
      setWipe(false);
      clearInterval(int);
    }, speed.interactive.hyper * 1000);
  };
  const { children, primary } = props;

  return (
    <StyledButton
      onClick={handleClick}
      border={border}
      wipe={wipe}
      primary={primary}
    >
      {children}
      <Wipe border={border} wipe={wipe} />
    </StyledButton>
  );
};
