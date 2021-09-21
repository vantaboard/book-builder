import { Html } from '@react-three/drei';
import React from 'react';
import { ToolTipProps } from './interface';

export default (props: ToolTipProps) => {
  const { children, pos } = props;
  return (
    <Html center position={pos}>
      {children}
    </Html>
  );
};
