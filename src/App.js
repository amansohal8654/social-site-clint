import React,{useContext} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login'
import MenuBar from './components/MenuBar'
import { ToastProvider } from 'react-toast-notifications'
import {AuthProvider, AuthContext} from './context/auth'
import AuthRoute from './util/AuthRoute'

function App() { 
  const {user} = useContext(AuthContext)
  return (
    <AuthProvider>
      <ToastProvider>
        <Router>
          <div className="app">
            <MenuBar />
            {user ? <Route exact path="/" component={Home} /> : <Redirect to='/login'/> }
            <Route exact path="/" component={user ? Login : Home} />
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/register" component={Register} />
          </div>
        </Router>
      </ToastProvider>
    </AuthProvider>
    
  );
}

export default App;
