import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import { HashRouter } from 'react-router-dom'
import Routes from './components/routes/Routes'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header>
          <Header />
        </header>
        <Routes />
      </div>
    </HashRouter>
  );
}

export default App;

