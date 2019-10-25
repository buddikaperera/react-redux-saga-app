import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_POSTS, SET_POSTS, ADD_POST, DELETE_POST, PUT_LIKES } from '../actions';
import Axios from 'axios';


export const watchGetPosts = function* () {
    yield takeEvery(GET_POSTS, workerGetPosts);
}

function* workerGetPosts() {
    console.log('get new posts')
    try {
        const url = 'http://localhost/react_backend/index.php/PostRestController/posts';
        const result = yield call(Axios.get, url);
        yield put({ type: SET_POSTS, value: result.data });
    }
    catch {
        console.log('Failed to get posts @ root saga workerGetPosts');
    }
}


export const watchPostPost = function* () {
    yield takeEvery(ADD_POST, workerPostPost)

}


function* workerPostPost(action) {
    console.log('Adding a post');
    try {
        const url = 'http://localhost/react_backend/index.php/PostRestController/add_posting';
        const result = yield call(Axios.post, url, action.value);
        yield put({ type: GET_POSTS });
        console.log('Added a user successful');
    }
    catch {
        console.log('Failed');
    }
}


export const watchDeletePost = function* () {
    yield takeEvery(DELETE_POST, workerDeletePost);
}
function* workerDeletePost(action) {
    console.log('Delete Post');
    try {
        const url = `http://localhost/react_backend/index.php/PostRestController/delete_post/${action.value}`;
        const result = yield call(Axios.delete, url);
        yield put({ type: GET_POSTS });
        console.log('Delete a post  successfully' + action.value);
    }
    catch {
        console.log('Failed to delete  @ root saga workerDeletePost');
    }
}


export const watchPutLikesPost = function* () {
    yield takeEvery(PUT_LIKES, workerLikePost);
}
function* workerLikePost(action) {
    console.log('Updating a likes ');
    try {
        const url = `http://localhost/react_backend/index.php/PostRestController/update/${action.value}`;
        const result = yield call(Axios.put, url, action.value);
        yield put({ type: GET_POSTS });
        console.log('Likes us  a user successfully' + action.value);
    }
    catch {
        console.log('Failed to get updating  @ root saga workerLikePost');
    }
}