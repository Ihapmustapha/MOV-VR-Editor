import 'aframe';
import {Entity, Scene} from 'aframe-react';
import 'aframe-particle-system-component';
import React, { Component } from 'react';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import RightSidebar from './RightSidebar/RightSidebar';
// import lookControl from './ControlScene/lookControls';
import uuid from 'uuid';
import './App.css';
require('aframe-extras');
require('aframe-gradient-sky');


// const myColor = ['#D92B6A', '#9564F2', '#FFCF59']


class App extends Component {

  state = {
    colorIndex: 0,
    entities: [
      {
        id: uuid(),
        primitive: 'box',
        color: '#EF0F94',
        position: {x: 2, y: 3, z: 4},
        rotation: {x: 2, y: 3, z: 4},
        scale: {x: 2, y: 3, z: 4}
      }
    ],
    selectedEntity: undefined
  };

  handleObjGen = (newObj) => {
    this.setState((prevState) => {
      return {
        entities: prevState.entities.concat(newObj)
      };
    })
  };

  handleClick = (e) => {

    this.setState({
      selectedEntity: e.target.id
    })
    console.log(this.state.selectedEntity);
  };

  handlePositionChange = (e) => {
    console.log(e.target.value)
    const newVal = Number(e.target.value);
    this.setState((prevState) => {
      return {
        entities: prevState.entities.map((entity) => {
          if (entity.id === prevState.selectedEntity) {
            return {...entity, position: {x: newVal, y: 3, z: 4}}
          }
          return entity;
        })
      }
    })
  };

  render() {
    return (

      <Scene>

        {/*User Interface Divs*/}
        <LeftSidebar onButtonClicked={this.handleObjGen}/>
        <RightSidebar
          onPositionChange= {this.handlePositionChange}

        />

        {/*Default Grid*/}
        <a-grid />

        {/*Scene Sky - Gradient Sky*/}
        <a-gradient-sky
          material="shader: gradient; topColor: 255 255 255; bottomColor: 151 239 255;"
        />

        <Entity primitive="a-camera" look-controls >
          <Entity
            primitive="a-cursor"
            cursor={{ fuse: false }}
            material={{ color: '#EF0F94', shader: 'flat', opacity: 0.75 }}
            geometry={{ radiusInner: 0.005, radiusOuter: 0.007 }}
            raycaster="objects: .clickable"
          />
        </Entity>

        {this.state.entities.map((entity) => {
          return (
            <Entity class="clickable"
              id={entity.id}
              key={entity.id}
              geometry={{primitive: entity.primitive}}
              material={{color: entity.color}}
              position={entity.position}
              rotation={entity.rotation}
              scale={entity.scale}
              events={{click: this.handleClick}}
            />
          );
        })}

      </Scene>
    );
  }
}

export default App;
