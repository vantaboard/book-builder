import { selectInteract } from 'features/interactAnimation/interactAnimationSlice';
import { useAppSelector } from 'hooks';
import React from 'react';
import { useSelector } from 'react-redux';
import * as tokens from 'style-dictionary-dist/variables';
import { Line, Overlay, Wipe } from './styles';

export default () => {
  const interact = useSelector(selectInteract);
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
          interact={interact}
          d='M 100,100V95L0,0v5'
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
