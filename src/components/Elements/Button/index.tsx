import React, { HTMLAttributes } from "react";
import { StyledButton } from "./styles";
import { ButtonProps } from './interface';

export default (props: HTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  const { children, primary } = props;
  return <StyledButton primary={primary}>{children}</StyledButton>
};