import React from 'react';
import TextElements from '../StyleGuide/TextElements';
import ColorPalette from '../StyleGuide/ColorPalette';

const StyleGuide = () => {
  return (
    <div>
      <div className="columns">
        <div className="column" />
      </div>
      <div className="columns">
        <div className="column is-half">
          <TextElements />
        </div>
        <div className="column is-half">
          <ColorPalette />
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
