import 'aframe';
import { Entity } from 'aframe-react';
import React from 'react';
import { connect } from 'react-redux';
import { selectEntity } from '../actions/entities';

const Primitive = (props) => (

  <Entity class="clickable"
    geometry={{primitive: props.primitive}}
    material={{color: '#14121e'}}
    position= {props.position}
    rotation={props.rotation}
    scale={props.scale}
    events={{collided: props.dispatch(selectEntity(props.id))}}
  />
);

export default connect()(Primitive);
