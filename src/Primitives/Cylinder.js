import 'aframe';
import {Entity} from 'aframe-react';
import React from 'react';

class Cylinder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: {x: Math.floor(Math.random()*10), y: 1, z: -5}
        }
    }
    render(){
        return (
            <Entity
                geometry={{primitive: 'cylinder',height: 4}}
                material={{color: '#565656'}}
                position={this.state.position}
                rotation={{x: 0, y: 0, z: 0}}
            />
        );
    }
}


export default Cylinder;
