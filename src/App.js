import 'aframe';
import { Scene } from 'aframe-react';
import 'aframe-particle-system-component';
import React, { Component } from 'react';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import EntitiesList from './EntitiesList';
import './App.css';
require('aframe-extras');
require('aframe-gradient-sky');
require('aframe-orbit-controls-component-2');



class App extends Component {

  state = {
    colorIndex: 0,
    selectedEntity: null
  };

  render(){

    return (

      <Scene>

        {/*User Interface Divs*/}
        <LeftSidebar />
        <RightSidebar />

        {/*Basic 3d Model For Testing loader*/}
        {/*FAILED
          <a-assets>
          <a-asset-item id='couch' src='/3dModels/helmet/model.gltf'></a-asset-item>
        </a-assets>
        <a-entity gltf-model="url(/3dModels/couch/model.gltf)"></a-entity>*/}


        {/*Default Grid*/}
        <a-grid />

        {/*Scene Sky - Gradient Sky*/}
        <a-gradient-sky
          material="shader: gradient; topColor: 255 255 255; bottomColor: 151 239 255;"
        />

        {/* {this.state.entities} */}
        <EntitiesList />
      </Scene>

    );
  }
}


export default App;
