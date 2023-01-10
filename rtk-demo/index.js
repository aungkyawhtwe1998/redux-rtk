const store = require('./app/store')
const { fetchUsers } = require('./features/user/userSlice')
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions
const cakeActions = require('./features/cake/cakeSlice').cakeActions
// const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log('initial state', store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log('Updated State', store.getState())
})
store.dispatch(fetchUsers())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(2))

//unsubscribe()
