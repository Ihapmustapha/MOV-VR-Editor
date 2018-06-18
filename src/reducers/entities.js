
const entityReducerDefaultState = [];

const entityReducer = (state = entityReducerDefaultState, action) => {
  switch (action.type) {
    case 'EDIT_ENTITY':
      return state.map((entity) => {
        if (entity.id === action.id) {
          return {
            ...entity,
            ...action.updates
          };
        }else{
          return entity;
        }
      });
    case 'ADD_ENTITY':
      return [
        ...state,
        action.entity
      ];
    case 'REMOVE_ENTITY':
      return state.filter((entity) => entity.id !== action.id);

    default:
      return state;
  }
};

export default entityReducer;
