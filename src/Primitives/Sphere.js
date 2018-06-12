import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

class Sphere extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: {x: Math.floor(Math.random()*10), y: 1, z: -5}
        }
    }
    render(){
        return (
            <Entity
                geometry={{primitive: 'sphere'}}
                material={{color: '#323d51'}}
                position={this.state.position}
                rotation={{x: 20, y: 40, z: 0}}
            />
        );
    }
}

export default Sphere;
