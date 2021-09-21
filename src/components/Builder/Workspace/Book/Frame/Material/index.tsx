import React from 'react';
import { DoubleSide } from 'three';

export default () => {
  return <meshBasicMaterial color='grey' side={DoubleSide} />;
};
