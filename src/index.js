import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer.js'

import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Login from './components/Login'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Fafsa from './components/Fafsa'

import Mission from './components/Mission'
import Services from './components/Services'
import Contact from './components/Contact'

import 'shards-ui/dist/css/shards.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <div className='wrapper'>
        <NavBar />
        <Route exact path='/' component={App} /> {/* App === Home */}
        <Route exact path='/mission' component={Mission} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/FAFSA' component={Fafsa}/>
      </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
