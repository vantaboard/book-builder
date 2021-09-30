import { book } from 'components/Builder/Workspace/Book';
import Material from 'components/Builder/Workspace/Book/Paper/Material';
import React from 'react';
import { PaperProps } from './interface';

export default (props: PaperProps) => {
  const length = book.length - book.lip * 2;
  const height = book.height;
  const width = book.width;
  return (
    <mesh position={[0, 0, 0]} scale={[length, height, width]}>
      <boxBufferGeometry />
      <Material />
    </mesh>
  );
};
