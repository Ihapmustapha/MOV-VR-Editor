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
        <input type='number' className='input' onChange= {this.handleChangeX.bind(this)}></input>
        <input type='number' className='input' onChange= {this.handleChangeY.bind(this)}></input>
        <input type='number' className='input' onChange= {this.handleChangeZ.bind(this)}></input>
      </div>

    );
  }

  /*Handling Change in X Scale*/
    handleChangeX(e) {
      const x = e.target.value;
      this.changeX(x);
    }
    changeX(x) {
      this.setState({xScale: x});
    }

  /*Handling Change in Y Scale*/
    handleChangeY(e) {
      const y = e.target.value;
      this.changeY(y);
    }
    changeY(y) {
      this.setState({yScale: y});
    }

  /*Handling Change in Z Scale*/
    handleChangeZ(e) {
       const z = e.target.value;
       this.changeZ(z);
    }
    changeZ(z) {
        this.setState({zScale: z});
      }

}

export default ScaleHandler;
