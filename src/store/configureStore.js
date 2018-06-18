import { createStore, combineReducers } from 'redux';
import entityReducer  from '../reducers/entities';
import selectionReducer from '../reducers/selection';

const configureStore = () =>{
  const store = createStore(
    combineReducers({
      entities: entityReducer,
      selectedEntity: selectionReducer
    })
  );

  return store;
};

export default configureStore;
