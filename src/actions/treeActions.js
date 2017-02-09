import { actionTypes } from '../constants';

export const addItem = (payload) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload
  };
}; // end-addItem

export const saveItem = (payload) => {
  return {
    type: actionTypes.SAVE_ITEM,
    payload
  };
}; // end-saveItem

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

export const endEditing = (id) => {
  return {
    type: actionTypes.END_EDITING,
    payload: { id }
  };
}; // end-endEditing

export const openItem = (item, levelIndex) => {
  return {
    type: actionTypes.OPEN_ITEM,
    payload: { item, levelIndex }
  };
}; // end-openItem

export const closeItem = (item, levelIndex) => {
  return {
    type: actionTypes.CLOSE_ITEM,
    payload: { item, levelIndex }
  };
}; // end-closeItem
