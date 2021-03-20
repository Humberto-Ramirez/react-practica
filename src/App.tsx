import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Blacklist from 'modules/blacklist';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Blacklist name="Servicio de consulta de pokemones"/>
    </div>
  );
}

export default App;
