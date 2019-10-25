import { SET_POSTS } from '../actions';

const posts = (state = [], action) => {

    switch (action.type) {
        case SET_POSTS:

            return [...action.value];


        default: return state;
    }
}

export default posts;