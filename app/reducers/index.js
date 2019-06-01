import { combineReducers } from 'redux';

import fetchPosts from './fetchPosts'
import getFilters from './getFilters'
import getIsLoading from './getIsLoading'
import getQuery from './getQuery'

export default combineReducers({
    
    posts: fetchPosts,
    isLoading: getIsLoading,
    filters: getFilters,
    query: getQuery,
})