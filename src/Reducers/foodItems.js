import {
    ADD_ITEM,
    FETCH_ITEMS
} from '../Actions';

const items = (state = [], action) => {
    switch(action.type){
        case FETCH_ITEMS:
        return null;

        case ADD_ITEM:
        return [
            ...state,
            {
                id: action.id,
                qty: action.qty,
                time: acton.time,
                type: acton.type
            }
        ]
        default:
            return state
        
        
    }
}

export default items