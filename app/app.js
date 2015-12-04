// import all css files
import './app.styl';
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './js/todolist.jsx';

render();

function render (){
  ReactDOM.render(<TodoList />, document.getElementById('todolist'));
}
