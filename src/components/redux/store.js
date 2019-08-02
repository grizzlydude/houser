import { createStore } from 'redux'

const initialState = {
    property_name: '',
    the_address: '',
    city: '',
    the_state: '',
    zip: 0
}

export const ADDING_HOUSE = 'ADDING_HOUSE'

function reducer(state = initialState, action){
    switch(action.type){
        case ADDING_HOUSE:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
