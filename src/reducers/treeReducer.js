import { actionTypes } from '../constants';
import Immutable from 'immutable';

// helpers
const closeItem = (state, closedItem, levelIndex) => {
  const recursiveModifier = (arr, id, modifier) => {
    const recurse = (objs, id) => {
      objs.forEach((child) => {
        if (child.parentId === id && child.hasChildren) {
          modifier(child);
          recurse(objs, child.id);
        }
      });
    };
    recurse(arr, id);
  };

  const closedLevelIndex = levelIndex + 1;
  const levelsWithoutClosedLevel = state.get('levels').filter((level) => {
    return Immutable.fromJS(level).get('index') < closedLevelIndex;
  });
  const itemsWithClosedItem = state.get('items').map((mi) => {
    if (closedItem.id === mi.get('id')) {
      return mi.set('isOpened', false);
    }
    return mi;
  }).toJS();
  recursiveModifier(itemsWithClosedItem, closedItem.id, (item) => {
    item.isOpened = false;
  });
  return state
    .set('levels', levelsWithoutClosedLevel)
    .set('items', Immutable.fromJS(itemsWithClosedItem));
};

// set initial state
let initialObject = {
  items: [],
  levels: [
    {
      index: 0,
      parentId: null
    }
  ],
  isSaved: true
};
let localObject = localStorage.getItem('tree');
let initialData = localObject ? JSON.parse(localObject) : initialObject;
let initialState = Immutable.fromJS(initialData);

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      console.log(action.type);
      const itemsWithAddedItem = state.get('items')
        .push(action.payload)
        .map((item) => {
          let iItem = Immutable.fromJS(item);
          if (iItem.get('id') === action.payload.parentId) return iItem.set('hasChildren', true);
          return item;
        });
      return state.set('items', itemsWithAddedItem);
    case actionTypes.SAVE_ITEM:
      console.log(action.type);
      const savedItem = state.get('items').find((item) => Immutable.fromJS(item).get('id') === action.payload.id);
      const savedItemIndex = state.get('items').indexOf(savedItem);
      const itemsWithSavedItem = state.get('items').set(savedItemIndex, Immutable.fromJS(savedItem).merge(Immutable.fromJS(action.payload)));
      return state.set('items', itemsWithSavedItem);
    case actionTypes.REMOVE_ITEM:
      console.log(action.type);
      const itemsWithoutRemovedItem = state.get('items')
        .filter((item) => {
          return Immutable.fromJS(item).get('id') !== action.payload.id;
        })
        .map((item) => {
          const foundItem = state.get('items').find((fi) => Immutable.fromJS(fi).get('parentId') === item.id && Immutable.fromJS(fi).get('id') !== action.payload.id);
          if (!foundItem) return Immutable.fromJS(item).set('hasChildren', false);
          return item;
        });
      const levelsWithoutRemovedParent = state.get('levels')
        .filter((level) => Immutable.fromJS(level).get('parentId') !== action.payload.id);
      return state
        .set('items', itemsWithoutRemovedItem)
        .set('levels', levelsWithoutRemovedParent);
    case actionTypes.START_EDITING:
      console.log(action.type);
      const selectedItem = state.get('items').find((item) => Immutable.fromJS(item).get('id') === action.payload.id);
      const selectedItemIndex = state.get('items').indexOf(selectedItem);
      const itemsWithSelectedItem = state.get('items').set(selectedItemIndex, Immutable.fromJS(selectedItem).set('isEditing', true));
      return state.set('items', itemsWithSelectedItem);
    case actionTypes.END_EDITING:
      console.log(action.type);
      const editedItem = state.get('items').find((item) => Immutable.fromJS(item).get('id') === action.payload.id);
      const editedItemIndex = state.get('items').indexOf(editedItem);
      const itemsWithEditedItem = state.get('items').set(editedItemIndex, editedItem.set('isEditing', false));
      return state.set('items', itemsWithEditedItem);
    case actionTypes.OPEN_ITEM:
      console.log(action.type);
      const { item: openedItem} = action.payload;
      const openedLevelIndex = action.payload.levelIndex + 1;
      const levelsWithAddedLevel = state.get('levels').set(openedLevelIndex, { index: openedLevelIndex, parentId: openedItem.id });
      const itemsWithToggledIsOpened = state.get('items').map((mi) => {
        let iMi = Immutable.fromJS(mi);
        if (openedItem.parentId === iMi.get('parentId')) {
          if (openedItem.id === iMi.get('id')) {
            return iMi.set('isOpened', true);
          } else {
            return iMi.set('isOpened', false);
          }
        }
        return mi;
      });
      return state
        .set('levels', levelsWithAddedLevel)
        .set('items', itemsWithToggledIsOpened);
    case actionTypes.CLOSE_ITEM:
      console.log(action.type);
      return closeItem(state, action.payload.item, action.payload.levelIndex);
    case actionTypes.CLOSE_SIBLING:
      console.log(action.type);
      const openedSibling = state.get('items').find((item) => {
        let iItem = Immutable.fromJS(item);
        return iItem.get('parentId') === action.payload.parentId && iItem.get('isOpened');
      });
      return openedSibling ? closeItem(state, Immutable.fromJS(openedSibling).toJS(), action.payload.levelIndex) : state;
    case actionTypes.CHANGE:
      console.log(action.type);
      return state.set('isSaved', false);
    case actionTypes.SAVE:
      console.log(action.type);
      window.localStorage.setItem('tree', JSON.stringify(state.toJS()));
      return state.set('isSaved', true);
    default:
      return state;
  }
};
