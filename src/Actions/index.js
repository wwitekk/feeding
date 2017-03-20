import fetch from 'isomorphic-fetch'

export const ADD_ITEM = 'ADD_ITEM';
const addItem = (item) => {
    return {
        type: ADD_ITEM,
        item
    }
}

export const FETCH_ITEMS = 'FETCH_ITEMS';
const receiveItems = (json) => {
    return {
        type: FETCH_ITEMS,
        items: json,
        receivedAt: Date.now()
    }
}

const restUrl = 'http://localhost:3001/items';
function fetchItems() {
    return (dispatch) => {
        return fetch(restUrl)
            .then(response => response.json())
            .then(json => dispatch(receiveItems(json)))
    }
}
