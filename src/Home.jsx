import React from 'react'
import web from '../src/Images/online.png'

const Home=() => {
    return (
        <>
           
               
           <section className="secClass">
               <div className="container-fluid">
                 
                   <div className="divrow">
                <div className="row">
                    
               <div className="col-sm-6 col-md-6">
               <div className="leftText">
                   <h1>Grow your business with<br/><span>Online tutorial</span></h1>
                   <button>click</button>
               </div> 
               </div>
               <div className="col-sm-6 col-md-6">
               <div className="rightImg">
                   <img src={web}></img>
               </div> 
               </div>
               



                </div>
                </div>
               </div>
           </section> 
        </>
    )
}

export default Home
