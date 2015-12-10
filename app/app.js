// import all css files
//import './app.styl';
import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import List from './js/list.jsx';

render();

function render (){
  ReactDOM.render(<List />, document.getElementById('list'));
}
