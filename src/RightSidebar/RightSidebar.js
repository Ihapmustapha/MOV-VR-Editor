import React from 'react';
import './style.css';
import { SketchPicker } from 'react-color';
import PositionHandler from '../AttributesHandlers/PositionHandler';
import RotationHandler from '../AttributesHandlers/RotationHandler';
import ScaleHandler from '../AttributesHandlers/ScaleHandler';



const rightSidebar = (props) => {
  return(

    <div id="rightContainer" aframe-injected>
      <div id='rightSidebar'>

        {/*Positin input handler*/}
        <PositionHandler onPositionChange={props.onPositionChange}/>

        {/*Rotation input handler*/}
        <RotationHandler onRotationChange={props.onRotationChange} />

        {/*Scale input handler*/}
        <ScaleHandler onScaleChange={props.onScaleChange}/>

        {/*Color Wheel*/}
        <div id='colorPicker'>
          <SketchPicker width= '180px' />
        </div>

      </div>
    </div>


  );
}


export default rightSidebar;
