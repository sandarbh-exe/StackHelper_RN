import { ACTION_FETCH_POSTS } from '../actions/actionTypes'

const INITIAL_STATE = {posts: []}

export default fetchPosts = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case ACTION_FETCH_POSTS : return({ ...state, posts: action.payload });

        default : return state;
    }
}