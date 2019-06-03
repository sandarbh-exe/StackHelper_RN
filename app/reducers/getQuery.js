import { ACTION_UPDATE_QUERY } from '../actions/actionTypes'

const INITIAL_STATE = 'input'

export default getQuery = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case ACTION_UPDATE_QUERY : return action.payload;

        default : return state;
    }
}