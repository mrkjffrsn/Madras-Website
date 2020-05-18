import React from 'react';
import { Provider } from 'react-redux'
import store from './Store'
import HomeContainer from './Containers/HomeContainer'
import DetailsContainer from './Containers/DetailsContainer';

/*
  Set Up Redux Store Here
*/

function App() {

  return (
    <Provider store={ store } >
      <HomeContainer />
      <DetailsContainer />
    </Provider>
  );
}

export default App;
