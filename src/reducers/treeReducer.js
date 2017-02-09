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
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      console.log(action.type);
      const itemsWithAddedItem = state.get('items')
        .push(action.payload)
        .map((item) => {
          if (item.id === action.payload.parentId) item.hasChildren = true;
          return item;
        });
      return state.set('items', itemsWithAddedItem);
      break;
    case actionTypes.SAVE_ITEM:
      console.log(action.type);
      const savedItem = state.get('items').find((item) => item.id === action.payload.id);
      const savedItemIndex = state.get('items').indexOf(savedItem);
      const itemsWithSavedItem = state.get('items').set(savedItemIndex, Object.assign({}, savedItem, action.payload));
      return state.set('items', itemsWithSavedItem);
      break;
    case actionTypes.REMOVE_ITEM:
      console.log(action.type);
      return state.set('items', state.get('items').filter((item) => item.id !== action.payload.id));
      break;
    case actionTypes.START_EDITING:
      console.log(action.type);
      const selectedItem = state.get('items').find((item) => item.id === action.payload.id);
      const selectedItemIndex = state.get('items').indexOf(selectedItem);
      const itemsWithSelectedItem = state.get('items').set(selectedItemIndex, Object.assign({}, selectedItem, { isEditing: true }));
      return state.set('items', itemsWithSelectedItem);
      break;
    case actionTypes.END_EDITING:
      console.log(action.type);
      const editedItem = state.get('items').find((item) => item.id === action.payload.id);
      const editedItemIndex = state.get('items').indexOf(editedItem);
      const itemsWithEditedItem = state.get('items').set(editedItemIndex, Object.assign({}, editedItem, { isEditing: false }));
      return state.set('items', itemsWithEditedItem);
      break;
    case actionTypes.OPEN_ITEM:
      console.log(action.type);
      const newIndex = action.payload.levelIndex + 1;
      return state.set('levels', state.get('levels').set(newIndex, { index: newIndex, parentId: action.payload.id }));
      break;
    default:
      return state;
  }
};
