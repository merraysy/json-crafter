import { actionTypes } from '../constants';
import Immutable, { Map } from 'immutable';

const initialState = Immutable.fromJS({
  items: [],
  levels: [
    {
      index: 0,
      parentId: null
    }
  ]
});

export default (state = initialState, action) => {
  // reusable stuff
  const items = state.get('items');
  const levels = state.get('levels');

  switch (action.type) {
    case actionTypes.ADD_ITEM:
      console.log(action.type);
      return state.set('items', state.get('items').push(action.payload));
      break;
    case actionTypes.SAVE_ITEM:
      console.log(action.type);
      const savedItem = items.find((item) => item.id === action.payload.id);
      const savedItemIndex = items.indexOf(savedItem);
      const itemsWithSavedItem = items.set(savedItemIndex, Object.assign({}, savedItem, action.payload));
      return state.set('items', itemsWithSavedItem);
      break;
    case actionTypes.REMOVE_ITEM:
      console.log(action.type);
      return state
        .set('items', items.filter((item) => item.id !== action.payload.id && item.parentId !== action.payload.id))
        .set('levels', levels.filter((level) => level.parentId !== action.payload.id));
      break;
    case actionTypes.START_EDITING:
      console.log(action.type);
      const selectedItem = items.find((item) => item.id === action.payload.id);
      const selectedItemIndex = items.indexOf(selectedItem);
      const itemsWithSelectedItem = items.set(selectedItemIndex, Object.assign({}, selectedItem, { isEditing: true }));
      return state.set('items', itemsWithSelectedItem);
      break;
    case actionTypes.END_EDITING:
      console.log(action.type);
      const editedItem = items.find((item) => item.id === action.payload.id);
      const editedItemIndex = items.indexOf(editedItem);
      const itemsWithEditedItem = items.set(editedItemIndex, Object.assign({}, editedItem, { isEditing: false }));
      return state.set('items', itemsWithEditedItem);
      break;
    case actionTypes.OPEN_ITEM:
      console.log(action.type);
      const newIndex = action.payload.levelIndex + 1;
      return state.set('levels', levels.set(newIndex, { index: newIndex, parentId: action.payload.id }));
      break;
    default:
      return state;
  }
};
