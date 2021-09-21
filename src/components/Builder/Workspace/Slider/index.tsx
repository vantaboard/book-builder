import { Html } from '@react-three/drei';
import React from 'react';
import { TitleCase } from '../../../../helpers/typography';
import Input from '../../../Input';
import { book } from '../Book';
import { SliderProps } from './interface';

export default (props: SliderProps) => {
  const { name, value, pos } = props;
  return (
    <Html center position={pos}>
      <Input
        name={name}
        value={value}
        prefix={TitleCase(name)}
        suffix={book.units}
      ></Input>
    </Html>
  );
};
