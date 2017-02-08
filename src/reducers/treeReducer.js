import { actionTypes } from '../constants';
import Immutable, { Map } from 'immutable';

const initialState = Immutable.fromJS({
  items: [],
  levels: [
    {
      parentId: null
    }
  ]
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const items = state.get('items');
      return state.set('items', items.push(action.payload));
      break;
    default:
      return state;
  }
};
