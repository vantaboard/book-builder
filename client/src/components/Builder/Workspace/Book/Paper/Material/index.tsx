import React from 'react';
import { DoubleSide } from 'three';
import * as tokens from "style-dictionary-dist/variables"

export default () => {
  return <meshBasicMaterial color={tokens.PaletteExtendedBlue2} side={DoubleSide} />;
};
