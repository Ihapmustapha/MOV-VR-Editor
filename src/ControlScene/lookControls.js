import 'aframe'; 
import {Entity, Scene} from 'aframe-react'; 
import React, { Component } from 'react'; 



const myColor = ['#D92B6A', '#9564F2', '#FFCF59']

class lookControls extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            colorIndex: 0
        }
    }


    /*Handling User Click on a Box*/
    handleClick() {
        this.setState({
        colorIndex: (this.state.colorIndex + 1) % myColor.length
        })
    }

    render(){

        return (
            <div>
            <Entity primitive="a-camera" 
                look-controls
                position={{x: 50, y: 70, z: 80}}
                >
                <Entity
                    primitive="a-cursor"
                    cursor={{ fuse: false }}
                    material={{ color: '#D74812', shader: 'flat', opacity: 0.75 }}
                    geometry={{ radiusInner: 0.005, radiusOuter: 0.007 }}
                    raycaster="objects: .clickable"
                />
                </Entity> 

                {/*Entity for Raycaster Testing*/}
                <Entity class="clickable"
                    geometry={{primitive: 'box'}}
                    material={{color: myColor[this.state.colorIndex]}}
                    position={{x: -5, y: 1, z: 1 }}
                    rotation={{x: 20, y: 40, z: 0}}
                    events={{click: this.handleClick.bind(this)}}
                /> 
        </div>
            
        );
        

    }
}


export default lookControls; 