import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Wrapper } from './styles';
import Workspace from './Workspace';

export default () => {
  return (
    <Wrapper>
      <Canvas>
        <Workspace />
      </Canvas>
    </Wrapper>
  );
};
