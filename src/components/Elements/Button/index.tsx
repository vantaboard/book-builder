import React, { HTMLAttributes, useState } from 'react';
import { ButtonProps } from './interface';
import { StyledButton, StyledClickOverlay } from './styles';

export default (props: HTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  const [active, setActive] = useState(false);
  const { children, primary } = props;
  return (
    <div>
      <StyledButton active={active} primary={primary}>
        <StyledClickOverlay
          onClick={() => {
            setActive(!active);
            const int = setInterval(() => {
              setActive(active);
              clearInterval(int);
            }, 100);
          }}
        >
          <svg preserveAspectRatio='xMinYMin meet' viewBox='0 0 100 100'>
            <filter id='filter'>
              <feGaussianBlur stdDeviation='5' />
            </filter>
            <polygon points='0, 100' filter='#filter' fill='black' />
          </svg>
        </StyledClickOverlay>
        {children}
      </StyledButton>
    </div>
  );
};
