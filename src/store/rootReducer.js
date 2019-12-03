import MainReducer from '../pages/Main/reducer'
import { combineReducers } from 'redux'


const appReducer = combineReducers({
  MainReducer
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export {
  rootReducer
}