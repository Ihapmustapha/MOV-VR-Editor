import 'aframe';
import {Entity, Scene} from 'aframe-react';
import 'aframe-particle-system-component';
import React, { Component } from 'react';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import Box from './Primitives/Box';
import Cylinder from './Primitives/Cylinder';
import lookControl from './ControlScene/lookControls';
import './App.css';
require('aframe-extras');
require('aframe-gradient-sky');



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
                    <lookControl /> 
                     
                    {/*User Interface Divs*/}
                    <LeftSidebar onButtonClicked={this.handleObjGen}/>
                    <RightSidebar />
                    

                    {/*Default Grid*/}
                    <a-grid />

                    {/*Scene Sky - Gradient Sky*/}
                    <a-gradient-sky
                        material="shader: gradient; topColor: 255 255 255; bottomColor: 151 239 255;"
                    />

                    {this.state.entities}
                </Scene>
            </div>
        );
    }



}

export default App;
