import React, { Component } from 'react';


class ScaleHandler extends Component {


  constructor () {
    super();
    this.state = {xScale: 0, yScale: 0, zScale: 0};
  }


  render () {
    return(
      <div>
        <p>Scale</p>
        <div id='inputText'>
          <p>x</p>
          <p>y</p>
          <p>z</p>
          <p>{this.state.xScale}</p>
          <p>{this.state.yScale}</p>
          <p>{this.state.zScale}</p>
        </div>
        <form onChange={this.props.onScaleChange}>
          <input type='number' name='xScale' className='input' onChange= {this.handleChangeX}></input>
          <input type='number' name='yScale' className='input' onChange= {this.handleChangeY}></input>
          <input type='number' name='zScale' className='input' onChange= {this.handleChangeZ}></input>
        </form>
      </div>
    );
  }

  /*Handling Change in X Scale*/
  handleChangeX = (e) => {
    const x = e.target.value;
    this.setState({
      xScale: x
    });
  }

  /*Handling Change in Y Scale*/
  handleChangeY = (e) => {
    const y = e.target.value;
    this.setState({
      yScale: y
    });
  }

  /*Handling Change in Z Scale*/
  handleChangeZ = (e) => {
    const z = e.target.value;
    this.setState({
      zScale: z
    });
  }
}

export default ScaleHandler;
