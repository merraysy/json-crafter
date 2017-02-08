import { actionTypes } from '../constants';
import Immutable, { Map } from 'immutable';

const initialState = Immutable.fromJS({
  items: [],
  levels: [
    {
      parentId: null
    }
  ],
  isEditing: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      console.log(action.type);
      return state.set('items', state.get('items').push(action.payload));
      break;
    case actionTypes.REMOVE_ITEM:
      console.log(action.type);
      let items = state.get('items');
      let item = items.find((item) => item.id === action.payload.id);
      let index = items.indexOf(item);
      return state.set('items', items.remove(index));
      break;
    case actionTypes.START_EDITING:
      console.log(action.type);
      return state.set('isEditing', true);
      break;
    default:
      return state;
  }
};
