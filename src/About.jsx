import React from 'react';
import about from '../src/Images/about.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const About =() => {
    return(
        <>
      <div className="container-fluid">
             <div className="row">
                 <div className="col-10 col-md-6 mx-auto">
                      <div className="leftDiv">
                     <h1>Showing AboutUs Page </h1>
                     <p>Lorem Ipsum textLorem Ipsum textLorem Ipsum text</p>
                 </div>
             </div>
             <div className="col-10 col-md-6 mx-auto">
                  <div className="rightDiv">
                     <div className="divImg">
                         <img src={about} alt="right-img"/>
                     </div>
                 </div>
             </div>
                 
                 
             </div>
         </div>  
               
         
        </>
    )
}
export default About