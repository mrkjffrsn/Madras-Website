
function detailsReducer( state = {}, action ){

  if ( action.type === 'DETAILS' ) {
    return {
      ...state,
      "value": action.value 
    }
  }

  return state
}

export default detailsReducer