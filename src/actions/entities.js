import uuid from 'uuid';
// Add and Remove action generatotrs
// position, scale, rotation are default values
export const addEntity = ( primitive ) => ({
  type: 'ADD_ENTITY',
  entity: {
    id: uuid(),
    primitive,
    position: { x: 1, y: 2, z: 3 },
    scale: { x: 1, y: 2, z: 3 },
    rotation: { x: 1, y: 2, z: 3 }
  }
});

export const removeEntity = ({ id }) => ({
  type: 'REMOVE_ENTITY',
  id
});

// Edit action generator
export const editEntity = (id, updates) => ({
  type: 'EDIT_ENTITY',
  id,
  updates
});

////////////////////////////////////////////

// The only action for selecting reducer
export const selectEntity = ({ id }) => ({
  type: 'SELECT_ENTITY',
  id
});
