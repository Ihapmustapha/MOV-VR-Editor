import 'aframe';
import { Scene } from 'aframe-react';
import 'aframe-particle-system-component';
import React from 'react';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import EntitiesList from './EntitiesList';
import './App.css';
require('aframe-extras');
require('aframe-gradient-sky');
require('aframe-orbit-controls-component-2');

const myColor = ['#D92B6A', '#9564F2', '#FFCF59']



    
  
  


const App = () => {

  return (

    <Scene>
        
        {/*Basic 3d Model For Testing loader*/}
        {/*FAILED
        <a-assets>
            <a-asset-item id='couch' src='/3dModels/helmet/model.gltf'></a-asset-item>
        </a-assets> 
        <a-entity gltf-model="url(/3dModels/couch/model.gltf)"></a-entity>
        <a-entity gltf-model={{src: 'virtualcity.gltf'}}/>
        <a-entity scale="0.5 0.5 0.5" object-model="src: url(https://cdn.aframe.io/link-traversal/models/ground.json);">
        </a-entity>

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

        {/*User Interface Divs*/}
        <LeftSidebar />
        <RightSidebar />

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
