import React, { HTMLAttributes, useEffect, useState } from 'react';
import { theme } from '../../../theme';
import { ButtonProps } from './interface';
import { Line, StyledButton, StyledClickOverlay, SvgOverlay } from './styles';

// TODO: Animate button with React-spring
export default (props: HTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  const [border, setBorder] = useState(false);
  const [wipe, setWipe] = useState(false);
  useEffect(() => {
    return () => {
      const int = setInterval(() => {
        setWipe(true);
        clearInterval(int);
      }, 3);
    };
  }, [wipe]);
  const { children, primary } = props;
  return (
    <div>
      <StyledButton
        onClick={() => {
          setBorder(false);
          setWipe(false);
          setBorder(!border);
          setWipe(!wipe);
          const int = setInterval(() => {
            setBorder(false);
            clearInterval(int);
          }, 200);
        }}
        border={border}
        wipe={wipe}
        primary={primary}
      >
        <div>{children}</div>
        <StyledClickOverlay>
          <SvgOverlay
            border={border}
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            width='100px'
            height='100px'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            enable-background='new 0 0 100 100'
            xmlSpace='preserve'
          >
            <defs>
              <filter id='filter'>
                <feGaussianBlur stdDeviation='9' />
              </filter>
            </defs>
            <Line
              d='m88.31776,92.61682l-83.08411,-82.8972c0.09346,0.09346 0.28037,-6.26168 6.26168,-3.45795c5.98131,2.80374 81.86916,81.86916 81.7757,81.7757c0.09346,0.09346 -0.09346,4.39252 -4.95327,4.57944z'
              border={border}
              wipe={wipe}
              x='95%'
              width='5%'
              height='100%'
              filter='url(#filter)'
              fill={theme.palette.focus.highlight}
            />
          </SvgOverlay>
        </StyledClickOverlay>
      </StyledButton>
    </div>
  );
};
