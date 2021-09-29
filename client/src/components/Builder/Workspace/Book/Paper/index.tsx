import React from 'react';
import { book } from '..';
import { PaperProps } from './interface';
import Material from './Material';

export default (props: PaperProps) => {
  const length = book.length - book.lip * 2;
  const height = book.height;
  const width = book.width;
  return (
    <mesh
      position={[0, 0, 0]}
      scale={[length, height, width]}
    >
      <boxBufferGeometry />
      <Material />
    </mesh>
  );
};
