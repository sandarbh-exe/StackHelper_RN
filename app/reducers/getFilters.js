import { ACTION_UPDATE_ORDER, ACTION_UPDATE_SORT } from '../actions/actionTypes'

const INITIAL_STATE = {sort: 'relevance', order: 'desc'}

export default getFilters = (state = INITIAL_STATE, action) => {
    
    switch(action.type){
        case ACTION_UPDATE_SORT : return({...state, sort: action.payload});
        case ACTION_UPDATE_ORDER : return({...state, order: action.payload});

        default : return state
    }
}