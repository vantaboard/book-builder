import { Html } from '@react-three/drei';
import Input from 'components/Elements/Input';
import { TitleCase } from 'helpers/typography';
import React from 'react';
import { book } from 'components/Builder/Workspace/Book';
import { SliderProps } from './interface';

// TODO: Make draggable
export default (props: SliderProps) => {
  const { name, value, pos } = props;
  return (
    <Html center position={pos}>
      <Input
        name={name}
        value={value}
        prefix
        suffix
        prefixText={TitleCase(name)}
        suffixText={book.units}
      ></Input>
    </Html>
  );
};
