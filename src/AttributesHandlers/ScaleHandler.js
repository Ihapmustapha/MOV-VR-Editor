import React from 'react';


const ScaleHandler = (props) => {

  return(
    <div>
      <p>Scale</p>
      <div id='inputText'>
        <p>x</p>
        <p>y</p>
        <p>z</p>
        <p>{props.selectedEntitiy ? props.selectedEntitiy.scale.x : ''}</p>
        <p>{props.selectedEntitiy ? props.selectedEntitiy.scale.y : ''}</p>
        <p>{props.selectedEntitiy ? props.selectedEntitiy.scale.z : ''}</p>
      </div>
      <form onChange={props.onScaleChange}>
        <input
          type='number'
          name='xScale'
          value={props.selectedEntitiy ? props.selectedEntitiy.scale.x : ''}
          className='input'>
        </input>

        <input
          type='number'
          name='yScale'
          value={props.selectedEntitiy ? props.selectedEntitiy.scale.y : ''}
          className='input'>
        </input>

        <input
          type='number'
          name='zScale'
          value={props.selectedEntitiy ? props.selectedEntitiy.scale.z : ''}
          className='input'>
        </input>
      </form>
    </div>
  );
}

export default ScaleHandler;
