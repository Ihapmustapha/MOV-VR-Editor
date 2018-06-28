import 'aframe';
import {Entity, Scene} from 'aframe-react';
import 'aframe-particle-system-component';
import React, {Component} from 'react';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import EntitiesList from './EntitiesList';
import './App.css';
require('aframe-extras');
require('aframe-gradient-sky');
require('aframe-orbit-controls-component-2');


const myColor = ['#D92B6A', '#9564F2', '#FFCF59']

class App extends Component {

  state = {
    colorIndex: 0,
    selectedEntity: null
  };

  /*Handling User Click on a Box*/
  handleClick() {
    this.setState({
      colorIndex: (this.state.colorIndex + 1) % myColor.length
    })
  }

  render(){
  
    return (
    <div>
      <div>
       <LeftSidebar />
      </div>
      <Scene>

        <Entity primitive="a-camera"
            look-controls
            >
            <Entity
                primitive="a-cursor"
                cursor={{ fuse: false }}
                material={{ color: '#D74812', shader: 'flat', opacity: 0.75 }}
                geometry={{ radiusInner: 0.005, radiusOuter: 0.007 }}
                raycaster="objects: .clickable"
            />
        </Entity>
  
        {/*Entity for Cursor Testing*/}
        <Entity class="clickable"
            geometry={{primitive: 'box'}}
            material={{color: myColor[this.state.colorIndex]}}
            position={{x: -5, y: 1, z: 1 }}
            rotation={{x: 20, y: 40, z: 0}}
            events={{click: this.handleClick.bind(this)}}
        />

        {/*User Interface Divs*/}
        
        <RightSidebar />

        {/*User Interface Divs*/}
       
        <RightSidebar />

        {/*Default Grid*/}
        <a-grid />

        {/*Scene Sky - Gradient Sky*/}
        <a-gradient-sky
          material="shader: gradient; topColor: 255 255 255; bottomColor: 151 239 255;"
        />

        {/* {this.state.entities} */}
        <EntitiesList />
        
        
        {/*Basic 3d Model For Testing loader*/}
        {/*FAILED
          <a-assets>
          <a-asset-item id='couch' src='/3dModels/helmet/model.gltf'></a-asset-item>
        </a-assets>
        <a-entity gltf-model="url(/3dModels/couch/model.gltf)"></a-entity>
        <a-assets>
            <a-asset-item id='tv-obj' src='/tv.gltf'></a-asset-item> 
        </a-assets>
        <a-entity id="tv1" gltf-model="#tv-obj" position="-1.66 2.15 2.18" rotation="0 -33.3 0"></a-entity> 
        */}

        {/*Raycaster Testing*/}
        {/*NO DOESN'T WORK LIKE THAT, RICK .. NOT ANYMORE*/}
        {/*
        <a-entity id="player" collider-check>
            <a-entity raycaster="objects: .collidable" position="0 -0.9 0" rotation="90 0 0"></a-entity>
        </a-entity>
        <a-entity class="collidable" geometry="primitive: box" position="1 0 0"></a-entity>
        */}

      </Scene>
    </div>
    );
  }
}




export default App;
