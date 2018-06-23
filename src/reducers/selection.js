
const selectedEntityDefaultState = null;

const selectionReducer = (state = selectedEntityDefaultState, action ) => {
  switch (action.type) {
    case 'SELECT_ENTITY':
    console.log(state);
      return action.id;
    default:
      return null;
  }
};

export default selectionReducer;
