import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup'
import './App.css'

const App = () => {
    return (
      <>
      <h1 className="title"> Welcome to our website</h1>
        <Router>
          <div>
            <nav className ="style-nav">
              <Link to = "/Login">Login</Link>
              <span> | </span>
              <Link to = "/Signup"> Signup </Link>
            </nav>
            <Routes>
            <Route path = "/Signup" element = {<Signup/>}/>
            <Route path = "/Login" element = {<Login/>}/>
            </Routes>  
            </div>
        </Router>
        </>
    )

}

export default App

