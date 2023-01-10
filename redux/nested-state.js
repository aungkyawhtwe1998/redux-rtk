const redux = require("redux");
const initialState = {
    name: 'Alex',
    address:{
        street:'113 Padauk st',
        city:'Mandalay',
        state:'Mdy'
    },
}

const STREET_UPDATED = 'STREET_UPDATED'
const updateStreet = (street) =>{
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

const reducer = (state= initialState, action)=>{
    switch(action.type){
        case STREET_UPDATED:
            return {
                ...state,
                address: {
                    ...state.address,
                    street: action.payload,
                }
            }
        default: {
            return state
        }
    }
}

const store = redux.createStore(reducer)
console.log("Initial State", store.getState())
const unsubsribe = store.subscribe(()=>{
    console.log('Updated State', store.getState())
})
store.dispatch(updateStreet('113 st'))
unsubsribe()