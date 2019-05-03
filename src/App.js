import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Perssonage from '../src/Components/Perssonage/index';
import Home from './Components/Home/index'
import Header from './Components/Header/index';
import DetailPerso from './Components/DetailPerso';

function App() {
  return (
    <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/perssonages" component={Perssonage}/>
          <Route path="/detailperssonages/:index" component={DetailPerso} />

        </Switch>
    </React.Fragment>
  );
}

export default App;
