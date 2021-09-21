import React from 'react';
import { Canvas } from 'react-three-fiber';
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
