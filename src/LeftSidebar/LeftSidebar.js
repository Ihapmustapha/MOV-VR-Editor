import React from 'react';
import './style.css';
import Icon from '../Icon/Icon.js';
import uuid from 'uuid';


const leftSidebar = (props) => {
  return(
    <div id="leftContainer" aframe-injected='true'>
      <div id="sideBar">
        <p id='headline'>BASIC 3D MODELS</p>
        {/*List Items*/}
        <div className= 'list-container'>

          <button id='list-item' onClick={() => {
            props.onButtonClicked({
              id: uuid(),
              primitive: 'box',
              position: {
                x: Math.floor(Math.random()*10),
                y:  Math.floor(Math.random()*10),
                z: Math.floor(Math.random()*10)
              },
              color: '#EF0F94',
              rotation: {x: 0, y: 0, z: 0},
              scale: {x: 2, y: 2, z: 2}
            })}
          }><Icon icon="cube" /></button>

          <button id='list-item' onClick={() => {
            props.onButtonClicked({
              id: uuid(),
              primitive: 'sphere',
              position: {
                x: Math.floor(Math.random()*10),
                y:  Math.floor(Math.random()*10),
                z: Math.floor(Math.random()*10)
              },
              color: '#EF0F94',
              rotation: {x: 0, y: 0, z: 0},
              scale: {x: 2, y: 2, z: 2}
            })}
          }><Icon icon="sphere" /></button>

          <button id='list-item' onClick={() => {
            props.onButtonClicked({
              id: uuid(),
              primitive: 'cylinder',
              position: {
                x: Math.floor(Math.random()*10),
                y:  Math.floor(Math.random()*10),
                z: Math.floor(Math.random()*10)
              },
              color: '#EF0F94',
              rotation: {x: 0, y: 0, z: 0},
              scale: {x: 2, y: 2, z: 2}
            })}
          }><Icon icon="cylinder" /></button>

          <button id='list-item'><Icon icon="pyramid" /></button>

          <button id='list-item'><Icon icon="add" /></button>
          <button id='list-item'><Icon icon="add" /></button>

          <button id='list-item'>7</button>
          <button id='list-item'>8</button>
        </div>
        {/*navigation buttons*/}
        <span id='navButtons'>
          <button>Next</button>
          <button>Prev</button>
        </span>
      </div>
    </div>
  );
}

export default leftSidebar;
