import React from 'react';


const PositionHandler = (props) => {

  return(
    <div>
      <p>Position</p>
      <div id='inputText'>
        <p>x</p>
        <p>y</p>
        <p>z</p>
        <p>{props.selectedEntitiy ? props.selectedEntitiy.position.x : ''}</p>
        <p>{props.selectedEntitiy ? props.selectedEntitiy.position.y : ''}</p>
        <p>{props.selectedEntitiy ? props.selectedEntitiy.position.z : ''}</p>
      </div>
      <form onChange={props.onPositionChange}>
        <input
          type='number'
          name='xPosition'
          value={props.selectedEntitiy ? props.selectedEntitiy.position.x : ''}
          className='input'>
        </input>

        <input
          type='number'
          name='yPosition'
          value={props.selectedEntitiy ? props.selectedEntitiy.position.y : ''}
          className='input'>
        </input>

        <input
          type='number'
          name='zPosition'
          value={props.selectedEntitiy ? props.selectedEntitiy.position.z : ''}
          className='input'>
        </input>
      </form>
    </div>
  );
}


export default PositionHandler;
