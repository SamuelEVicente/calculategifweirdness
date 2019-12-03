import { createStore, compose, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { rootReducer } from './rootReducer'
import { composeWithDevTools } from 'remote-redux-devtools'

const composeEnhancers = process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(thunk)) : compose(applyMiddleware(thunk))

function createReduxStore() {
    let store = createStore(rootReducer, composeEnhancers)
    return { store }
}

let { store } = createReduxStore()

export { store }