import React, { Component } from 'react';


class RotationHandler extends Component {

  state = {
    xRotation: 0,
    yRotation: 0,
    zRotation: 0
  };

  render () {
    return(
      <div>
        <p>Rotation</p>
        <div id='inputText'>
          <p>x</p>
          <p>y</p>
          <p>z</p>
          <p>{this.state.xRotation}</p>
          <p>{this.state.yRotation}</p>
          <p>{this.state.zRotation}</p>
        </div>
        <form onChange={this.props.onRotationChange}>
          <input type='number' name='xRotation' className='input' onChange= {this.handleChangeX}></input>
          <input type='number' name='yRotation' className='input' onChange= {this.handleChangeY}></input>
          <input type='number' name='zRotation' className='input' onChange= {this.handleChangeZ}></input>
        </form>
      </div>
    );
  }

  /*Handling Change in X Rotation*/
  handleChangeX = (e) => {
    const x = e.target.value;
    this.setState({
      xRotation: x
    });
  }

  /*Handling Change in Y Rotation*/
  handleChangeY = (e) => {
    const y = e.target.value;
    this.setState({
      yRotation: y
    });
  }

  /*Handling Change in Z Rotation*/
  handleChangeZ = (e) => {
    const z = e.target.value;
    this.setState({
      zRotation: z
    });
  }
}

export default RotationHandler;
