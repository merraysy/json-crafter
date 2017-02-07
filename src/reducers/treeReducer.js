export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PROP':
      return {...state, ...action.payload};
      break;
    default:
      return state;
  }
};
