import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userListReducer } from './reducers/userReducers.js'
import { userLoginReducer } from './reducers/userLoginReducers.js'

const reducer = combineReducers({
    userList: userListReducer,
    userLogin: userLoginReducer,
})


const initialState = {}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store

