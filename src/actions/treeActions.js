import actionTypes from '../constants';

export const addProp = (payload) => {
  return {
    type: actionTypes.ADD_PROP,
    payload
  });
}; // end-addProp
