import React from 'react';
import './style.css';
import Icon from '../Icon/Icon.js';
import uuid from 'uuid';



{/*A constant to hold all used colors to keep App's primary and secondary colors*/}
// const Colors = [
//   {move: '3f4467', movedark: '14121e', lightsky: '64cac5'},
//   {gradientOne: '423d62', gradientTwo: '5fb9b8',
//   gradientThree: '06d4fd', gradientFour: '506bfd'},
//   {gradientFive: 'e02494', gradientSix: 'd745f2'}
// ]



const leftSidebar = (props) => {
  return(
    <div id="leftContainer" aframe-injected>
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
              rotation: {x: 2, y: 3, z: 4},
              scale: {x: 2, y: 3, z: 4}
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
              rotation: {x: 2, y: 3, z: 4},
              scale: {x: 2, y: 3, z: 4}
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
              rotation: {x: 2, y: 3, z: 4},
              scale: {x: 2, y: 3, z: 4}
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
