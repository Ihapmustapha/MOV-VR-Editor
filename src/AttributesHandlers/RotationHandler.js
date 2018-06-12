import React, { Component } from 'react';


class RotationHandler extends Component {



  constructor () {
      super();
      this.state = {xRotation: 0, yRotation: 0, zRotation: 0};
  }


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
        <input type='number' className='input' onChange= {this.handleChangeX.bind(this)}></input>
        <input type='number' className='input' onChange= {this.handleChangeY.bind(this)}></input>
        <input type='number' className='input' onChange= {this.handleChangeZ.bind(this)}></input>
      </div>

    );
  }

  /*Handling Change in X Rotation*/
    handleChangeX(e) {
      const x = e.target.value;
      this.changeX(x);
    }
    changeX(x) {
      this.setState({xRotation: x});
    }

  /*Handling Change in Y Rotation*/
    handleChangeY(e) {
      const y = e.target.value;
      this.changeY(y);
    }
    changeY(y) {
      this.setState({yRotation: y});
    }

  /*Handling Change in Z Rotation*/
    handleChangeZ(e) {
       const z = e.target.value;
       this.changeZ(z);
    }
    changeZ(z) {
        this.setState({zRotation: z});
      }

}

export default RotationHandler;
