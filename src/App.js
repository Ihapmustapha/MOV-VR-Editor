import 'aframe';
import { Scene } from 'aframe-react';
import 'aframe-particle-system-component';
import React from 'react';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import lookControl from './ControlScene/lookControls';
import EntitiesList from './EntitiesList';
import './App.css';
require('aframe-extras');
require('aframe-gradient-sky');
require('aframe-orbit-controls-component-2');



const App = () => {

  return (

    <Scene>
      <lookControl />

      {/*User Interface Divs*/}
      <LeftSidebar />
      <RightSidebar />

		{/*Basic 3d Model For Testing loader*/}
        <a-entity scale="0.5 0.5 0.5" object-model="src: url(./3dModels/Bigmax_White_OBJ.obj);"></a-entity>

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


export default App;
