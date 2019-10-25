import { SET_FAVORITES } from '../actions';

const favorites = (state = [], action) => {
  switch (action.type) {
    case SET_FAVORITES:

      return [...action.value];

    default: return state;
  }
}

export default favorites;