import React from 'react';
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import store from './state/store'
import MainNav from './../Components/MainNav'
import HomeContainer from '../Containers/HomeContainer'
import DetailsContainer from '../Containers/DetailsContainer';

/*
  Set Up Redux Store Here
*/
function App() {

  return (
    <Provider store={ store } >

      <Router>

        <MainNav items={getMenuData()} />

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

/* HELPERS */

function getMenuData(){
  return [
    {
      "Title": "Playlists",
      "ImageName": "VideoLibrary",
      "Route": "/playlist"
    },
    {
      "Title": "Events",
      "ImageName": "Event",
      "Route": "/events"
    },
    {
      "Title": "Notice",
      "ImageName": "Notifications",
      "Route": "/notice"
    }
  ]
}