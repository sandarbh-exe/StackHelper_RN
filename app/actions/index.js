import * as actionTypes from './actionTypes'

export const updateSort = (sortValue) => ({
    type: actionTypes.ACTION_UPDATE_SORT,
    payload: sortValue
})

export const updateOrder = (orderValue) => ({
    type: actionTypes.ACTION_UPDATE_ORDER,
    payload: orderValue
})

export const updateQuery = (text) => ({
    type: actionTypes.ACTION_UPDATE_QUERY,
    payload: text
})

export const setLoadingStatus = (status) => ({
    type: actionTypes.ACTION_SET_LOADING_STATUS,
    payload: status
})

export const fetchPosts = ({order,sort,query}) => {
    return (dispatch) => {
        fetch(`https://api.stackexchange.com/2.2/search/advanced?order=${order}&sort=${sort}&q=${query}&site=stackoverflow&filter=!9Z(-wwK0y`)
        .then(response => {
          if(response.ok)
            return response
          console.log('Network Error.');
        })
        .then(response => response.json())
        .then(result => { dispatch({ type: actionTypes.ACTION_FETCH_POSTS, payload: result.items }); })
        .catch((error) => console.log(error))
    }   
}