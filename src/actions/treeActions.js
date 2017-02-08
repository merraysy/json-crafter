import { actionTypes } from '../constants';

export const addItem = (payload) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload
  };
}; // end-addItem

export const removeItem = (id) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: { id }
  };
}; // end-removeItem

export const startEditing = (id) => {
  return {
    type: actionTypes.START_EDITING,
    payload: { id }
  };
}; // end-startEditing
