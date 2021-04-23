import React from 'react'
import { NavLink } from 'react-router-dom'



const Card=(props)=> {
    return (
        <>
            <div className="col-10 col-md-4 mx-auto">    
                  <div className="card" activeClassName="width:400px">
                      <img className="card-img-top img-fluid" src={props.imgsrc} alt="Card image"></img>
                      <div className="card-body">
                          <h1 className="card-title">{props.title}</h1>
                          <p className="card-text">some text here</p>
                          <NavLink to="#" className="btn btn-primary" alt="card-img">see profile</NavLink>
                      </div>
                      
                  </div> 
                 
              </div>
        </>
            
        
    )
}

export default Card
