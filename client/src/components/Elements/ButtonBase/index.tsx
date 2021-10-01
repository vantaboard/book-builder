import { handleInteraction } from 'components/Common/Interactive/handlers';
import React, { HTMLAttributes } from 'react';
import { StyledButtonBase } from './styles';
export default (props: HTMLAttributes<HTMLButtonElement>) => {
  const handleClick = handleInteraction();
  return <StyledButtonBase onClick={handleClick}>{props.children}</StyledButtonBase>;
};
