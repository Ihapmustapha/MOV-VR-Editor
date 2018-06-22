import 'aframe';
import {Entity, Scene} from 'aframe-react';
import 'aframe-particle-system-component';
import React, { Component } from 'react';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import Box from './Primitives/Box';
import Cylinder from './Primitives/Cylinder';
//import lookControl from './ControlScene/lookControls';
//import EntitiesList from './EntitiesList';
import './App.css';
require('aframe-extras');
require('aframe-gradient-sky');
require('aframe-orbit-controls-component-2');



class App extends Component {


    constructor(props) {
        super(props);
        this.handleObjGen = this.handleObjGen.bind(this);
        this.state = {
            entities: [<Box />, <Cylinder />],
            selectedEntity: null
        }
    }

    handleObjGen(newObj){
        this.setState((prevState) => {
            return {
                entities: prevState.entities.concat(newObj)
            };
        })
    }

    

    render() {
        return (
            <div>
                <Scene>
                {/*Basic Navigation Controls*/}
                <a-entity id="rig"
                        movement-controls
                        position="25 0 25">
                    <a-entity camera
                        position="0 1.6 0"
                        look-controls="pointerLockEnabled: true"></a-entity>
                </a-entity>

                {/*Scene Sky - Gradient Sky*/}
                <a-gradient-sky
                     material="shader: gradient; topColor: 255 255 255; bottomColor: 151 239 255;"
                />


                <a-entity 
                scale="2 2 2"
                rotation= "0 0 0"
                >
                
                    {/*User Interface Divs*/}
                    <LeftSidebar onButtonClicked={this.handleObjGen}/>
                    <RightSidebar />


                    {/*Default Grid*/}
                    <a-grid />

                    {/*Scene Entities*/}
                    {this.state.entities}

                    {/*Basic 3d Model For Testing loader*/}
                    <a-entity scale="0.5 0.5 0.5" object-model="src: url(./3dModels/Bigmax_White_OBJ.obj);">
                    </a-entity>
                </a-entity> 
                </Scene>
            </div>
        );
    }



}

export default App;
