import { Html } from '@react-three/drei';
import React from 'react';
import { TitleCase } from '../../../../helpers/typography';
import { Box } from '../../../Box/styles';
import { book } from '../Book';
import { SliderProps } from './interface';
import { Input, Prefix, Suffix } from './styles';

export default (props: SliderProps) => {
  const { name, value, pos } = props;
  return (
    <Html center position={pos}>
      <Box>
        <Prefix>{TitleCase(name)}</Prefix>
        <Input name={name} placeholder={value}></Input>
        <Suffix>{TitleCase(book.units)}</Suffix>
      </Box>
    </Html>
  );
};
