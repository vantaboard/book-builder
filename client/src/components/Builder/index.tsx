import React from 'react';
import { Wrapper } from './styles';
import Workspace from 'components/Builder/Workspace';
import { Canvas } from '@react-three/fiber';

export default () => {
  return (
    <Wrapper>
      <Canvas>
        <Workspace />
      </Canvas>
    </Wrapper>
  );
};
