
function homeReducer( state = {}, action ){

  if ( action.type === "SAMPLE" ) {
    return {
      ...state,
      value: action.data
    }
  }

  return state
}

export default homeReducer