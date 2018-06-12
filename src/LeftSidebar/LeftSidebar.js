import React from 'react';
import './style.css';
import Icon from '../Icon/Icon.js';
import Box from '../Primitives/Box';
import Cylinder from '../Primitives/Cylinder';
import Sphere from '../Primitives/Sphere';



{/*A constant to hold all used colors to keep App's primary and secondary colors*/}
const Colors = [
    {move: '3f4467', movedark: '14121e', lightsky: '64cac5'},
    {gradientOne: '423d62', gradientTwo: '5fb9b8',
    gradientThree: '06d4fd', gradientFour: '506bfd'},
    {gradientFive: 'e02494', gradientSix: 'd745f2'}
]

const leftSidebar = (props) => {
    return(
        <div id="leftContainer" aframe-injected>
            <div id="sideBar">
                <p id='headline'>BASIC 3D MODELS</p>
                {/*List Items*/}
                <div className= 'list-container'>

                    <button id='list-item' onClick={() => {
                            props.onButtonClicked([<Box/>])}
                        }><Icon icon="cube" />
                    </button>
                    <button id='list-item' onClick={() => {
                            props.onButtonClicked([<Sphere/>])}
                        }><Icon icon="sphere" /></button>

                    <button id='list-item'><Icon icon="pyramid" /></button>
                    <button id='list-item' onClick={() => {
                            props.onButtonClicked([<Cylinder/>])}
                        }><Icon icon="cylinder" /></button>

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
