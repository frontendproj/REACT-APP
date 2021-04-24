import React from 'react'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';

const Navbar =() =>{
  
  
     const toggleMenu = () => {
       var toggle = document.getElementById('navbarTogglerDemo01');
       if(toggle.style.display === "none"){
         toggle.style.display ="block"
       }
       else{
         toggle.style.display = "none"
       }
     }
   
  
    return (
        <>
       
        <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">

           
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <NavLink className="navbar-brand font-weight-bold" to="#"><span>Logo</span></NavLink>

    <button className="navbar-toggler" onClick={toggleMenu}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item shadow-sm p-4 mb-4 bg-white">
          <NavLink className="nav-link active font-weight-bold" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item shadow-sm p-4 mb-4 bg-white">
          <NavLink className="nav-link font-weight-bold" to="/services">Services</NavLink>
        </li>
        <li className="nav-item shadow-sm p-4 mb-4 bg-white">
          <NavLink className="nav-link font-weight-bold" to="/about">About</NavLink>
        </li>
        <li className="nav-item shadow-sm p-4 mb-4 bg-white ">
          <NavLink className="nav-link font-weight-bold" to="/contact">Contact</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
 </div>
        </div>

        </div>
    
</>
    )
}

export default Navbar
