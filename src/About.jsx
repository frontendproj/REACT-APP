import React from 'react';
import about from '../src/Images/about.jpg'

const About =() => {
    return(
        <>
         <section className="secClass">
               <div className="container-fluid">
                 
                   <div className="divrow">
                <div className="row">
                    
               <div className="col-sm-6 col-md-6">
               <div className="leftText">
                   <h1>Our <span>About Us page</span></h1>
                   <p> </p>
                   <button>click</button>
               </div> 
               </div>
               <div className="col-sm-6 col-md-6">
               <div className="rightImg">
                   <img src={about}></img>
               </div> 
               </div>
               



                </div>
                </div>
               </div>
           </section> 
        </>
    )
}
export default About