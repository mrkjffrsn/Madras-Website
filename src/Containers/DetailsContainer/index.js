import React from 'react'
import { connect } from 'react-redux'

function DetailsContainer( props ){

  function onClick( e ){
    props.onClick( 10 )
  }

  return (
    <span onClick={ onClick }> Details Page { props.value } </span>
  )

}


function mapStateToProps( state ){
  return {
    value: state.details.value
  }
}

function mapDispatchToProps( dispatch ){
  return {
    onClick: function( value ){
      dispatch( { type: 'DETAILS', value } )
    }
  }
}


export default connect( mapStateToProps, mapDispatchToProps )(DetailsContainer)