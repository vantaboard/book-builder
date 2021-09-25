import styled from 'styled-components';
import { InteractiveProps } from '../interface';
import { borderRadius, speed } from './../../../../theme';

export const Wipe = styled('svg')<InteractiveProps>`
  clip-path: border-box;
  border-radius: ${(p) => (p.border ? borderRadius.small : borderRadius.base)};
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`;

export const Overlay = styled('div')<InteractiveProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 0;
  left: 0;
  top: 0;
`;

export const Line = styled('path')<InteractiveProps>`
  transition: ease-in-out
    ${(p) => (p.wipe ? `${speed.interactive.hyper}s` : '0s')} transform;
  transform: translate(
    ${(p) => (p.wipe ? '100%' : '-100%')},
    ${(p) => (p.wipe ? '-100%' : '100%')}
  );
`;
