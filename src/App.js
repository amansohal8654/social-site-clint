import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login'
import MenuBar from './components/MenuBar'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <MenuBar/>
            <Home />
          </Route>
          <Route exact path='/login'>
            <MenuBar/>
            <Login />
          </Route>
          <Route exact path='/register'>
            <MenuBar/>
            <Register/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
