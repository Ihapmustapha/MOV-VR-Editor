import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
import Cursor from './Cursor'

class Camera extends Component {

  render() {
    return(
      <a-camera
        position= "-10 0 0"
        cursor-visible= "true"
        cursor-scale= "2"
        cursor-color= "#0095DD"
        cursor-opacity="1"
      >
      <Cursor />
      </a-camera>

    );
  }
}


export default Camera;
