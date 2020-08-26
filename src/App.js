import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Provider } from 'react-redux';
import store from './redux/store/index';

import Index from './pages/Index'
import About from './pages/About'

import Navbar from './components/layout/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/about" component={About} />
          </Switch>      
        </div>
      </Router>
    </Provider>
  )
}

export default App
