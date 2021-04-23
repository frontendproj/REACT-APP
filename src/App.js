import React from 'react'

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Navbar from './Navbar';
import './index.css'
 
import {BrowserRouter as Router, Switch,Route,Redirect} from 'react-router-dom';
const App = () => {
  return (
    <>
   
   
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" ><Home /></Route>
      <Route exact path="/about" ><About /></Route>
      <Route exact path="/contact"><Contact /></Route>
      <Route exact path="/services"><Services /></Route>
      <Redirect to="/"></Redirect>
    </Switch>
    
    </Router>
    
    </>
      
    
  )
}

export default App 
 