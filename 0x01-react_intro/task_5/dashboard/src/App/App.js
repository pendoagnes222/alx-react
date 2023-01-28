import React from 'react';
import './App.css';
import logo from '../assets/holberton-logo.jpg';
import { getFooterCopy, getFullYear } from '../utils/utils';

function App() {
  return (
    <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </div>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <label htmlFor='email'>Email: </label>
          <input type="email" id='email' />
          <label htmlFor='pass'>Password: </label>
          <input type="password" id='pass'/>
          <button>OK</button>
        </div>
        <div className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
    </div>
  );
}

export default App;
