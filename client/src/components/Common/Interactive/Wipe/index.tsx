import React, { useEffect, useState } from 'react';
import { highlight } from '../../../../theme';
import { InteractiveProps } from '../interface';
import { Line, Overlay, Wipe } from './styles';

const wipePath = `m88.31776,92.61682l-83.08411,-82.8972c0.09346,0.09346 0.28037,
                  -6.26168 6.26168,-3.45795c5.98131,2.80374 81.86916,81.86916
                  81.7757,81.7757c0.09346,0.09346 -0.09346,4.39252 -4.95327,
                  4.57944z`;

export default (props: InteractiveProps) => {
  const { border, wipe } = props;
  return (
    <Overlay>
      <Wipe
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
          d={wipePath}
          border={border}
          wipe={wipe}
          x='95%'
          width='5%'
          height='100%'
          filter='url(#filter)'
          fill={highlight}
        />
      </Wipe>
    </Overlay>
  );
};
