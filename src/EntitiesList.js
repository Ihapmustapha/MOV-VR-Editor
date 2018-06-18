import React from 'react';
import { connect } from 'react-redux';

const EntitiesList = (props) => (
  <div>
    <h3>Whatever you are doing, don't use redux!!</h3>
    {props.entities.length}
  </div>
);

const mapStateToProps = (state) => {
  return {
    entities: state.entities
  };
};

export default connect(mapStateToProps)(EntitiesList);
