import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import React from 'react';
import Book, { book } from './Book';
import Slider from './Slider';

const Camera = () => <PerspectiveCamera position={[20, 2, 2]} makeDefault />;

export default () => {
  return (
    <>
      <Slider
        name={'width'}
        value={book.width}
        pos={[book.length, (book.height / 2) * 1, book.width]}
      />
      <Slider
        name={'height'}
        value={book.height}
        pos={[book.length, (book.height / 2) * 0.75, book.width]}
      />
      <Slider
        name={'length'}
        value={book.length}
        pos={[book.length, (book.height / 2) * 0.5, book.width]}
      />
      <Slider
        name={'lip'}
        value={book.lip}
        pos={[book.length, (book.height / 2) * 0.25, book.width]}
      />
      <Book />
      <ambientLight />
      <Camera />
      <OrbitControls />
    </>
  );
};
