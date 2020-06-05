import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import PlayerComponent from './components/Player/player';
import AppBarComponent from './components/AppBar/Appbar';
import VideoPlayer from './components/CustomVideo/CustomVideo';
import VideoContextProvider from './Contexts/Video/Video.context';


function App() {


  return (

    <div className="App">
        <AppBarComponent />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/video-player" component={PlayerComponent} />
          </Switch>
        </BrowserRouter>
   
    </div>

  );
}


export default App;
