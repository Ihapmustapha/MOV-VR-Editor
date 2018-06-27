import React, { Component } from 'react';


class PositionHandler extends Component {

  state = {
    xPosition: 0,
    yPosition: 0,
    zPosition: 0
  };

  render () {
    return(
      <div>
        <p>Position</p>
        <div id='inputText'>
          <p>x</p>
          <p>y</p>
          <p>z</p>
          <p>{this.state.xPosition}</p>
          <p>{this.state.yPosition}</p>
          <p>{this.state.zPosition}</p>
        </div>
        <form onChange={this.props.onPositionChange}>
          <input type='number' name='xPosition' className='input' onChange= {this.handleChangeX}></input>
          <input type='number' name='yPosition' className='input' onChange= {this.handleChangeY}></input>
          <input type='number' name='zPosition' className='input' onChange= {this.handleChangeZ}></input>
        </form>
      </div>

    );
  }

  /*Handling Change in X Position*/
  handleChangeX = (e) => {
    const x = e.target.value;
    this.setState({
      xPosition: x
    });
  }

  /*Handling Change in Y Position*/
  handleChangeY = (e) => {
    const y = e.target.value;
    this.setState({
      yPosition: y
    });
  }

  /*Handling Change in Z Position*/
  handleChangeZ = (e) => {
    const z = e.target.value;
    this.setState({
      zPosition: z
    });
  }
}



export default PositionHandler;
