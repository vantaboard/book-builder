import { book } from 'components/Builder/Workspace/Book';
import React from 'react';
import { FrameProps } from './interface';
import Material from 'components/Builder/Workspace/Book/Frame/Material';

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
