import React from 'react';
import * as tokens from 'style-dictionary-dist/variables';
import { InteractiveProps } from '../interface';
import { Line, Overlay, Wipe } from './styles';

const wipePath = `M 100,100V95L0,0v5`;

export default (props: InteractiveProps) => {
  const { interact } = props;
  return (
    <Overlay>
      <Wipe
        interact={interact}
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
          interact={interact}
          x='95%'
          width='5%'
          height='100%'
          filter='url(#filter)'
          fill={tokens.PaletteFocusHighlight}
        />
      </Wipe>
    </Overlay>
  );
};
