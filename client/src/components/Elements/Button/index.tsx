import { handleInteraction } from 'components/Common/Interactive/handlers';
import Wipe from 'components/Common/Interactive/Wipe';
import { selectInteract, toggle } from 'features/interactAnimation/interactAnimationSlice';
import React, { HTMLAttributes } from 'react';
import { useSelector } from 'react-redux';
import { StyledButton } from '../Button/styles';
import { ButtonProps } from './interface';

export default (props: HTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  const { label, primary } = props;

  const handleClick = handleInteraction();
  const interact = useSelector(selectInteract);
  return (
    <StyledButton interact={interact} primary={primary} onClick={handleClick}>
      {label}
      <Wipe />
    </StyledButton>
  );
};
