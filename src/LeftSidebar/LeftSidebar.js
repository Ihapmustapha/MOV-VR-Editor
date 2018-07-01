import React from 'react';
import './style.css';
import Icon from '../Icon/Icon.js';
import uuid from 'uuid';
import Inventory from '../Inventory/Inventory';


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
              color: '#9013FE',
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
              color: '#9013FE',
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
              color: '#9013FE',
              rotation: {x: 0, y: 0, z: 0},
              scale: {x: 2, y: 2, z: 2}
            })}
          }><Icon icon="cylinder" /></button>

          <button id='list-item'><Icon icon="pyramid" /></button>

          <button id='list-item'><Icon icon="add" /></button>
          <button id='list-item' onClick={()=> {
            props.onRemoveClicked(props.selectedEntitiy ? props.selectedEntitiy.id : '')
          }}
          ><Icon icon="add" /></button>

          <div>
            <Inventory
              onRequestHandler={props.onRequestHandler}
            />
          </div>

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
