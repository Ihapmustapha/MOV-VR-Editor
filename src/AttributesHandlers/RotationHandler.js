import React, { Component } from 'react';


class RotationHandler extends Component {
  constructor () {
    super();
    this.state = {X:'', Y:'', Z:''};
  }


  render () {
    return(
      <div>
      <p>Rotation</p>
        <div id='inputText'>
            <p>x</p>
            <p>y</p>
            <p>z</p>
            <p>{this.state.x}</p>
            <p>{this.state.y}</p>
            <p>{this.state.z}</p>
        </div>

        <input type='x' name='x' className='input' value={this.state.x} onChange= {this.handleRotationChange.bind(this)}></input>
        <input type='y' name='y' className='input' value={this.state.y} onChange= {this.handleRotationChange.bind(this)}></input>
        <input type='z' name='z' className='input' value={this.state.z} onChange= {this.handleRotationChange.bind(this)}></input>
      </div>

    );
  }

  handleRotationChange(e){
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }
}

export default RotationHandler;
