import 'aframe';
import {Entity, Scene} from 'aframe-react';
import 'aframe-particle-system-component';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
        color: '#9013FE',
        position: {x: 2, y: 3, z: 4},
        rotation: {x: 2, y: 3, z: 4},
        scale: {x: 2, y: 3, z: 4}
      }
    ],
    selectedEntity: undefined,
    assets: []
  };

  handleObjGen = (newObj) => {
    this.setState((prevState) => {
      return {
        entities: prevState.entities.concat(newObj)
      };
    })
  };

  handleObjRem = (selectedEntitiy) => {
    console.log("remove me");
    this.setState((prevState) => {
      return {
        entities: prevState.entities.filter((entity) => {
          if (entity.id !== selectedEntitiy) {
            return entity;
          }
        })
      };
    })
  };

  handleClick = (e) => {
    const selected = e.target.id;
    this.setState({
      selectedEntity: selected
    })
    console.log(this.state.selectedEntity);
  };

  handlePositionChange = (e) => {
    let newVal = Number(e.target.value);
    let axisVal = e.target.name;
    this.setState((prevState) => {
      return {
        entities: prevState.entities.map((entity) => {
          if (entity.id === prevState.selectedEntity) {
            if (axisVal === 'xPosition') {
              return {...entity, position: {...entity.position, x: newVal} }
            }else if (axisVal === 'yPosition') {
              return {...entity, position: {...entity.position, y: newVal} }
            }else if (axisVal === 'zPosition') {
              return {...entity, position: {...entity.position, z: newVal} }
            }
          }
          return entity;
        })
      }
    })
  };

  handleRotationChange = (e) => {
    let newVal = Number(e.target.value);
    let axisVal = e.target.name;
    this.setState((prevState) => {
      return {
        entities: prevState.entities.map((entity) => {
          if (entity.id === prevState.selectedEntity) {
            if (axisVal === 'xRotation') {
              return {...entity, rotation: {...entity.rotation, x: newVal} }
            }else if (axisVal === 'yRotation') {
              return {...entity, rotation: {...entity.rotation, y: newVal} }
            }else if (axisVal === 'zRotation') {
              return {...entity, rotation: {...entity.rotation, z: newVal} }
            }
          }
          return entity;
        })
      }
    })
  };

  handleScaleChange = (e) => {
    let newVal = Number(e.target.value);
    let axisVal = e.target.name;
    this.setState((prevState) => {
      return {
        entities: prevState.entities.map((entity) => {
          if (entity.id === prevState.selectedEntity) {
            if (axisVal === 'xScale') {
              return {...entity, scale: {...entity.scale, x: newVal} }
            }else if (axisVal === 'yScale') {
              return {...entity, scale: {...entity.scale, y: newVal} }
            }else if (axisVal === 'zScale') {
              return {...entity, scale: {...entity.scale, z: newVal} }
            }
          }
          return entity;
        })
      }
    })
  };

  handleColorChange = (color) => {
    this.setState((prevState) => {
      return {
        entities: prevState.entities.map((entity) => {
          if (entity.id === prevState.selectedEntity) {
            return {...entity, color: color.hex }
          }
          return entity;
        })
      }
    })
  }

  onRequestHandler = (response) => {
    this.onResults(response,this.importAsset);
  };

  importAsset = (asset) => {
    console.log(asset);
    this.setState((prevState) => {
      return {
        assets: prevState.assets.concat({
          id: asset,
          position: {x: 0, y:  0, z: 0},
          color: '#9013FE',
          rotation: {x: 0, y: 0, z: 0},
          scale: {x: 2, y: 2, z: 2}
        })
      }
    })
  };

  onResults = (data, callback) => {
    console.log(data);
    while ( document.getElementById('SearchResults').childNodes.length ) {
      document.getElementById('SearchResults').removeChild( document.getElementById('SearchResults').firstChild );
    }

    const assets = data.assets;
    if ( assets ) {
      for ( let i = 0; i < assets.length; i ++ ) {
        let asset = assets[ i ];
        //var image = createImage( asset );

        const image = document.createElement('img');
        image.src = asset.thumbnail.url;
        image.style.width = '40px';
        image.style.height = '30px';
        image.addEventListener('click', function (event) {
          callback(asset.formats[0].root.url);
        });

        // ReactDOM.render(<Image/>, document.getElementById('SearchResults'));
        document.getElementById('SearchResults').append( image );
      }
    }
  };

  render() {
    return (
      <div>
        <div>
          <LeftSidebar
            onButtonClicked={this.handleObjGen}
            onRemoveClicked={this.handleObjRem}
            onRequestHandler={this.onRequestHandler}
            selectedEntitiy={this.state.entities.filter((entity) => {
              if (entity.id === this.state.selectedEntity){
                return entity;
              }
            })[0]}
          />
        </div>
        <Scene>

          {/*User Interface Divs*/}

          <RightSidebar
            onPositionChange={this.handlePositionChange}
            onRotationChange={this.handleRotationChange}
            onScaleChange={this.handleScaleChange}
            onColorChange={this.handleColorChange}
            selectedEntitiy={this.state.entities.filter((entity) => {
              if (entity.id === this.state.selectedEntity){
                return entity;
              }
            })[0]}
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



          {this.state.assets.map((asset) => {
            return (
              <a-asset-item
                id={asset.id}
                key={asset.id}
                src={asset.id}>
              </a-asset-item>
              );
          })}

          {this.state.assets.map((asset) => {
            return (
              <Entity class="clickable"
                id={asset.id}
                key={asset.id}
                // material={{color: 'red'}}
                obj-model={`obj: #${asset.id}`}
                material={{color: asset.color}}
                position={asset.position}
                rotation={asset.rotation}
                scale={asset.scale}
                events={{click: this.handleClick}}
              />
              );
          })}


        </Scene>
      </div>
    );
  }
}

  export default App;
