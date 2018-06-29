import React  from 'react';


const RotationHandler = (props) => {

  return(
    <div>
      <p>Rotation</p>
      <div id='inputText'>
        <p>x</p>
        <p>y</p>
        <p>z</p>
        <p>{props.selectedEntitiy ? props.selectedEntitiy.rotation.x : ''}</p>
        <p>{props.selectedEntitiy ? props.selectedEntitiy.rotation.y : ''}</p>
        <p>{props.selectedEntitiy ? props.selectedEntitiy.rotation.z : ''}</p>
      </div>
      <form onChange={props.onRotationChange}>
        <input
          type='number'
          name='xRotation'
          value={props.selectedEntitiy ? props.selectedEntitiy.rotation.x : ''}
          className='input' >

        </input>
        <input
          type='number'
          name='yRotation'
          value={props.selectedEntitiy ? props.selectedEntitiy.rotation.y : ''}
          className='input' >

        </input>
        <input
          type='number'
          name='zRotation'
          value={props.selectedEntitiy ? props.selectedEntitiy.rotation.z : ''}
          className='input' >

        </input>
      </form>
    </div>
  );
}

export default RotationHandler;
