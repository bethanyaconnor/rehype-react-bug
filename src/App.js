import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {RehypeApp} from './app';

function App() {
  return ReactDOM.render(React.createElement(RehypeApp),
    document.getElementById('root'));
}

export default App;
