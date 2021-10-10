import Frame from 'components/Builder/Workspace/Book/Frame';
import Paper from 'components/Builder/Workspace/Book/Paper';
import { Book } from 'data/classes';
import React from 'react';

export const book = new Book(1, 7.25, 4, 0.15, 'imperial');

export default () => {
  return (
    <>
      <group>
        <Frame front />
        <Paper />
        <Frame />
      </group>
    </>
  );
};
