import { ACTION_UPDATE_QUERY } from '../actions/actionTypes'

const INITIAL_STATE = {query: 'input'}

export default getQuery = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case ACTION_UPDATE_QUERY : return({ ...state, query: action.payload });

        default : return state;
    }
}