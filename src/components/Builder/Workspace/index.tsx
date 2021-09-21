import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import React from 'react';
import Book, { book } from './Book';
import Slider from './Slider';

const Camera = () => <PerspectiveCamera position={[20, 2, 2]} makeDefault />;

const sliderValues: [string, number, number][] = [
  ['width', book.width, 1],
  ['height', book.height, 0.75],
  ['length', book.length, 0.5],
  ['lip', book.lip, 0.25],
];

const sliders: Array<JSX.Element> = [];
sliderValues.forEach((_) => {
  const name: string = _[0];
  const value: number = _[1];
  const percent: number = _[2];
  sliders.push(
    <Slider
      name={name}
      value={value}
      pos={[book.length, (book.height / 2) * percent, book.width]}
    />
  );
});
const Sliders = () => <>{sliders}</>;

export default () => {
  return (
    <>
      <Sliders />
      <Book />
      <ambientLight />
      <Camera />
      <OrbitControls />
    </>
  );
};
