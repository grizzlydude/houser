import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
// import Routes from './routes'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header>
          <Header />
        </header>
       <Switch>
         <Route exact path='/' component = {Dashboard}/>
         <Route path='/wizard' component ={Wizard}/>
       </Switch>
      </div>
    </HashRouter>
  );
}

export default App;

