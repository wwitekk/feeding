import fetch from 'isomorphic-fetch'

export const REQUEST_ITEMS = 'REQUEST_ITEMS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'

function requestItems() {
    return {
        type: REQUEST_ITEMS
    }
}

function receiveItems(json) {
    return {
        type: RECEIVE_ITEMS,
        items: json,
        receivedAt: Date.now()
    }
}

function fetchPosts() {
    return dispatch => {
        dispatch(requestItems())
        return fetch('http://localhost:3001/items')
            .then(response => response.json())
            .then(json => dispatch(receiveItems(json)))
    }
}

function shouldFetchItems(state) {
    const items = state.items
    if (!!items) {
        return true
    } else if (items.isFetching) {
        return false
    } else {
        return items.didInvalidate
    }
}

export function fetchItemsIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchItems(getState())) {
            return dispatch(fetchPosts())
        }
    }
}
