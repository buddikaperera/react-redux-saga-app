import { takeEvery, call, put } from 'redux-saga/effects';
import { SET_FAVORITES, GET_FAVORITES } from '../actions';
import Axios from 'axios';

export const watchGetFavorites = function* () {
  yield takeEvery(GET_FAVORITES, workerGetFavorites);
}


function* workerGetFavorites() {
  console.log('get favorites posts ')
  try {
    const uri = 'http://localhost/react_backend/index.php/PostRestController/favourites_posts';
    const result = yield call(Axios.get, uri);
    yield put({ type: SET_FAVORITES, value: result.data });
  }
  catch {
    console.log('failed to load favorites posts');
  }
}

