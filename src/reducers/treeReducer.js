import { actionTypes } from '../constants';
import Immutable from 'immutable';

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
    case actionTypes.SAVE_ITEM:
      console.log(action.type);
      const savedItem = state.get('items').find((item) => item.id === action.payload.id);
      const savedItemIndex = state.get('items').indexOf(savedItem);
      const itemsWithSavedItem = state.get('items').set(savedItemIndex, Object.assign({}, savedItem, action.payload));
      return state.set('items', itemsWithSavedItem);
    case actionTypes.REMOVE_ITEM:
      console.log(action.type);
      const itemsWithoutRemovedItem = state.get('items')
        .filter((item) => item.id !== action.payload.id)
        .map((item) => {
          const foundItem = state.get('items').find((fi) => fi.parentId === item.id && fi.id !== action.payload.id);
          if (!foundItem) item.hasChildren = false;
          return item;
        });
      const levelsWithoutRemovedParent = state.get('levels')
        .filter((level) => level.parentId !== action.payload.id);
      return state
        .set('items', itemsWithoutRemovedItem)
        .set('levels', levelsWithoutRemovedParent);
    case actionTypes.START_EDITING:
      console.log(action.type);
      const selectedItem = state.get('items').find((item) => item.id === action.payload.id);
      const selectedItemIndex = state.get('items').indexOf(selectedItem);
      const itemsWithSelectedItem = state.get('items').set(selectedItemIndex, Object.assign({}, selectedItem, { isEditing: true }));
      return state.set('items', itemsWithSelectedItem);
    case actionTypes.END_EDITING:
      console.log(action.type);
      const editedItem = state.get('items').find((item) => item.id === action.payload.id);
      const editedItemIndex = state.get('items').indexOf(editedItem);
      const itemsWithEditedItem = state.get('items').set(editedItemIndex, Object.assign({}, editedItem, { isEditing: false }));
      return state.set('items', itemsWithEditedItem);
    case actionTypes.OPEN_ITEM:
      console.log(action.type);
      const { item, levelIndex } = action.payload;
      const newIndex = levelIndex + 1;
      const levelsWithAddedLevel = state.get('levels').set(newIndex, { index: newIndex, parentId: item.id });
      const itemsWithToggledIsOpened = state.get('items').map((mi) => {
        if (item.parentId === mi.parentId) {
          if (item.id === mi.id) {
            mi.isOpened = true;
          } else {
            mi.isOpened = false;
          }
        }
        return mi;
      });
      return state
        .set('levels', levelsWithAddedLevel)
        .set('items', itemsWithToggledIsOpened);
    default:
      return state;
  }
};
