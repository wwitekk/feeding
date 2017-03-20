// Store structure
// store = {
//     week: 1,
//     items: [
//         {
//             "id": 1,
//             "qty": 68,
//             "time": "2016-08-23 17:55:16",
//             "type": 1
//         },
//         {
//             "id": 2,
//             "qty": 74,
//             "time": "2017-10-16 06:16:15",
//             "type": 1
//         }
//     ],
//     total: 778,
//     subTotalType1: 500,
//     subTotalType2: 278
// }




import {
    ADD_ITEM,
    FETCH_ITEMS
} from '../Actions';

const items = (state = [], action) => {
    switch (action.type) {
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