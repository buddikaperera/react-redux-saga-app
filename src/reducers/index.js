
import posts from './posts';
import favorites from './favorites';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({

  posts: posts,
  favorites: favorites
});

export default rootReducer;