import React from 'react';
import { book } from '..';
import { FrameProps } from './interface';
import Material from './Material';

export default (props: FrameProps) => {
  const { front } = props;

  const length = book.lip;
  const height = book.height;
  const width = book.width;

  const zOffset = (-book.length + book.lip) / 2;
  return (
    <mesh
      position={[front ? zOffset : -zOffset, 0, 0]}
      scale={[length, height, width]}
    >
      <boxBufferGeometry />
      <Material />
    </mesh>
  );
};
