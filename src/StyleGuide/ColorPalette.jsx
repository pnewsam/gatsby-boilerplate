import React from 'react';
import ColorSwatch from './ColorSwatch';

const ColorPalette = () => {
  return (
    <div style={{ display: 'flex' }}>
      <ColorSwatch />
      <ColorSwatch />
      <ColorSwatch />
      <ColorSwatch />
      <ColorSwatch />
      <ColorSwatch />
    </div>
  );
};

export default ColorPalette;
