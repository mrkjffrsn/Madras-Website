import React from 'react'
import { connect } from 'react-redux'

function HomeContainer( props ){

  const onClick = ( e ) => {
    props.onClick( 5 )
  }

  return (
    <span onClick={ onClick } > Home Page { props.value } </span>
  )
}

function mapStateToProps( state ){
  return {
    value: state.home.value
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    onClick: function( value ){
      dispatch( { type: "SAMPLE", data: value } )
    }
  }
}


export default connect( mapStateToProps, mapDispatchToProps )( HomeContainer )