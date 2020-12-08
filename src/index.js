import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Login from './components/Login'
import About from './components/About'


ReactDOM.render(
  <BrowserRouter>
    <div className='wrapper'>
      <NavBar />
      <Route exact path='/' component={App} /> {/* App === Home */}
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
