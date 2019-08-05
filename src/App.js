import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import axios from 'axios'
import Routes from './components/routes/Routes'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header>
          <Header />
        </header>
        {/* <Switch>
         <Route exact path='/' component = {Dashboard}/>
         <Route path='/wizard' component ={Wizard}/>
       </Switch> */}
        <Routes />
      </div>
    </HashRouter>
  );
}

export default App;

