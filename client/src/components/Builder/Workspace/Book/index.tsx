import React from 'react';
import { Book } from '../../../../data/classes';
import Frame from './Frame';
import Paper from './Paper';

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
