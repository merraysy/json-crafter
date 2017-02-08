import { actionTypes } from '../constants';

const initialState = {
  items: [],
  levels: [
    {
      parentId: null
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      console.log(action.type);
      break;
    default:
      return state;
  }
};
