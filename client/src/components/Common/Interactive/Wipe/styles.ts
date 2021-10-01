import * as tokens from 'style-dictionary-dist/variables';
import styled from 'styled-components';
import { InteractiveProps } from './../interface';

export const Wipe = styled('svg')<InteractiveProps>`
  clip-path: border-box;
  border-radius: ${(p) =>
    p.interact ? tokens.BorderRadiusSmall : tokens.BorderRadiusBase};
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`;

export const Overlay = styled('div')`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 0;
  left: 0;
  top: 0;
`;

export const Line = styled('path')<InteractiveProps>`
  transition: ease-in-out
    ${(p) => (p.interact ? `${tokens.AnimationSpeedInteractiveHyper}s` : `${tokens.AnimationSpeedInteractiveHyper}s`)}
    transform;
  transform: translate(
    ${(p) => (p.interact ? '100%' : '-100%')},
    ${(p) => (p.interact ? '-100%' : '100%')}
  );
`;
