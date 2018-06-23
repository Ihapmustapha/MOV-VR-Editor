import uuid from 'uuid';
// Add action generator
// position, scale, rotation are default values
export const addEntity = (primitive) => ({
  type: 'ADD_ENTITY',
  entity: {
    id: uuid(),
    primitive,
    position: {
      x: Math.floor(Math.random()*10),
      y: Math.floor(Math.random()*10),
      z: Math.floor(Math.random()*10)
    },
    scale: { x: 1, y: 1, z: 1 },
    rotation: { x: 0, y: 0, z: 0 }
  }
});

// Remove action generator
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
export const selectEntity = ( id ) => ({
  type: 'SELECT_ENTITY',
  id
});
