import 'aframe';
import {Entity} from 'aframe-react';
import React from 'react';

class Box extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            position: {x: Math.floor(Math.random()*10), y:  Math.floor(Math.random()*10), z: Math.floor(Math.random()*10)}
        }
    }
    render(){
        return (
            <Entity
                geometry={{primitive: 'box'}}
                material={{color: '#14121e'}}
                position={this.state.position}
                rotation={{x: 20, y: 40, z: 0}}
            />
        );
    }
}

export default Box;
