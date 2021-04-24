import React from 'react'
import web from '../src/Images/online.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home=() => {
    return (
        <>
         <div className="container-fluid">
             <div className="row">
                 <div className="col-10 col-md-6 mx-auto">
                      <div className="leftDiv">
                     <h1>Showing Home Page </h1>
                     <p>Lorem Ipsum textLorem Ipsum textLorem Ipsum text</p>
                 </div>
             </div>
             <div className="col-10 col-md-6 mx-auto">
                  <div className="rightDiv">
                     <div className="divImg">
                         <img src={web} alt="right-img"/>
                     </div>
                 </div>
             </div>
                 
                 
             </div>
         </div>  
               
         
        </>
    )
}

export default Home
