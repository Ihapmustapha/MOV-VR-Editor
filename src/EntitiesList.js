import React from 'react';
import { connect } from 'react-redux';
import Primitive from './Primitives/Primitive';

const EntitiesList = (props) => (
  props.entities.map((entity) => {
    return <Primitive  key={entity.id} {...entity} />;
  })
);

const mapStateToProps = (state) => {
  return {
    entities: state.entities
  };
};

export default connect(mapStateToProps)(EntitiesList);
