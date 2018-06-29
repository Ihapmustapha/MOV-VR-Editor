import React from 'react';
import './style.css';
import { SketchPicker } from 'react-color';
import PositionHandler from '../AttributesHandlers/PositionHandler';
import RotationHandler from '../AttributesHandlers/RotationHandler';
import ScaleHandler from '../AttributesHandlers/ScaleHandler';



const rightSidebar = (props) => {
  return(

    <div id="rightContainer" aframe-injected='true'>
      <div id='rightSidebar'>

        {/*Positin input handler*/}
        <PositionHandler
          onPositionChange={props.onPositionChange}
          selectedEntitiy={props.selectedEntitiy}
        />

        {/*Rotation input handler*/}
        <RotationHandler
          onRotationChange={props.onRotationChange}
          selectedEntitiy={props.selectedEntitiy}
        />

        {/*Scale input handler*/}
        <ScaleHandler
          onScaleChange={props.onScaleChange}
          selectedEntitiy={props.selectedEntitiy}
        />

        {/*Color Wheel*/}
        {/* http://casesandberg.github.io/react-color/ */}
        <div id='colorPicker'>
          <SketchPicker
            id='colorPicker'
            width= '180px'
            color={props.selectedEntitiy ? props.selectedEntitiy.color : ''}
            onChangeComplete={props.onColorChange}
          />
        </div>
      </div>
    </div>

  );
}


export default rightSidebar;
