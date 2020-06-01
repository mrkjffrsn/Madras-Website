import { combineReducers } from "redux";
import homeReducer from '../../Containers/HomeContainer/state/reducer'
import detailsReducer from '../../Containers/DetailsContainer/state/reducer'

const reducers = {
  home: homeReducer,
  details: detailsReducer
}

export default combineReducers( reducers )