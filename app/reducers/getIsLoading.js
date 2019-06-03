import { ACTION_SET_LOADING_STATUS } from '../actions/actionTypes'

const INITIAL_STATE = {isLoading: true}

export default getIsLoading = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case ACTION_SET_LOADING_STATUS : return({ ...state, isLoading: !(state.isLoading) });

        default : return state;
    }
}