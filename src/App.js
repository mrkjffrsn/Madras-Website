import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './Store'
import HomeContainer from './Containers/HomeContainer'
import DetailsContainer from './Containers/DetailsContainer';

/*
  Set Up Redux Store Here
*/

function App() {

  return (
    <Provider store={ store } >

      <Router>

        <Switch>
          <Route path="/home" component={HomeContainer} />
          <Route path="/playlist/:id" component={DetailsContainer} />
          <Route path="/" component={HomeContainer} />
        </Switch>

      </Router>
    </Provider>
  );
}

export default App;
