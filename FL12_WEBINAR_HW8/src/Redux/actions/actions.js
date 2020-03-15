export const addNew = props => ({
  type: 'ADD_NEW_ELEMENT',
  props
});

export const deleteElement = id => ({
  type: 'DELETE_ELEMENT',
  id: id
});

export const editElement = data => ({
  type: 'EDIT_ELEMENT',
  data: data
});
