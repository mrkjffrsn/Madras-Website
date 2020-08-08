import React from 'react'
import { connect } from 'react-redux'
import middleware from '../../Middleware'

function HomeContainer( props ){

  const onClick = ( e ) => {
    // props.onClick( 5 )
    const query = '*[_type == "playlist"]'
    /* middleware.contentDataSource.client.fetch(query).then( ( data   )=>{
      console.log("Data is :", data)
    }) */
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