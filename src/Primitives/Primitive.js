import 'aframe';
import { Entity } from 'aframe-react';
import React from 'react';

const Primitive = ({ primitive, position, rotation, scale }) => (

  <Entity
    geometry={{primitive}}
    material={{color: '#14121e'}}
    position= {position}
    rotation={rotation}
    scale={scale}
  />
);

export default Primitive;
