import { actionTypes } from '../constants';

export const addItem = (payload) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload
  };
}; // end-addItem
