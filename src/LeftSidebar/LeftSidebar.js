import React from 'react';
import './style.css';
import Icon from '../Icon/Icon';
import { connect } from 'react-redux';
import { addEntity } from '../actions/entities';

 


{/*A constant to hold all used colors to keep App's primary and secondary colors*/}
const Colors = [
  {move: '3f4467', movedark: '14121e', lightsky: '64cac5'},
  {gradientOne: '423d62', gradientTwo: '5fb9b8',
  gradientThree: '06d4fd', gradientFour: '506bfd'},
  {gradientFive: 'e02494', gradientSix: 'd745f2'}
]

//writing a Json File with the exported objects

const exportJson = (data) => {
  const headers = new Headers(); 
  headers.append('Content-Type', 'application/json'); 

  const options = {
    method = 'POST', 
    headers,
    body: JSON.stringify(data), 
  }; 

  const request = new Request('http://localhost:3005/posts', options);
  const response = await fetch(request); 
  const status = await response.status;  
}

const LeftSidebar = (props) => {
  return(
      <div id="leftContainer" aframe-injected>
        <div id="sideBar">
          <p id='headline'>BASIC 3D MODELS</p>
          {/*List Items*/}
          <div className= 'list-container'>

            <button id='list-item' onClick={() => {
              props.dispatch(addEntity('box'))
            }}><Icon icon="cube" />
          </button>
          <button id='list-item' onClick={() => {
            props.dispatch(addEntity('sphere'))
          }}><Icon icon="sphere" /></button>

          <button id='list-item' onClick={() => {
            props.dispatch(addEntity('cylinder'))
          }}><Icon icon="cylinder" /></button>
          <button id='list-item'><Icon icon="pyramid" /></button>

          <button id='list-item'><Icon icon="add" /></button>
          <button id='list-item'><Icon icon="add" /></button>

          {/*<button id='list-item'>7</button>
          <button id='list-item'>8</button>*/}
        </div>
        {/*navigation buttons*/}
        <span id='navButtons'>
          <button onClick={exportJson}>Export</button>
        </span>
      </div>
    </div>
  );
}


export default connect()(LeftSidebar);
