import 'aframe';
import { Entity, Scene } from 'aframe-react';
import 'aframe-particle-system-component';
import React from 'react';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import lookControl from './ControlScene/lookControls';
import EntitiesList from './EntitiesList';
import './App.css';
require('aframe-extras');
require('aframe-gradient-sky');



const App = () => {

  return (

    <Scene>
      <lookControl />

      {/*User Interface Divs*/}
      <LeftSidebar />
      <RightSidebar />

      <Entity primitive="a-camera" look-controls >
        <Entity
          primitive="a-cursor"
          cursor={{ fuse: true }}
          material={{ color: '#EF0F94', shader: 'flat', opacity: 0.75 }}
          geometry={{ radiusInner: 0.005, radiusOuter: 0.007 }}
          raycaster="objects: .clickable"
        />
      </Entity>

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
