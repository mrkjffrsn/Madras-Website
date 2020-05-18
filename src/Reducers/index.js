import { combineReducers } from "redux";
import homeReducer from './homeReducer'
import detailsReducer from './detailsReducer'

const reducers = {
  home: homeReducer,
  details: detailsReducer
}

export default combineReducers( reducers )