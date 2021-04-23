import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import Carddata from './Carddata';


const Services = () => {
    return (
        <>
           <div className="container-fluid pt-3 bg-light">
              |<div className="row  gy-3 mb-3">
                  
           {
                Carddata.map((val,ind) => {
                    return <Card key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title} />
                })
           }

           </div>
           </div>
        </>
    )
}

export default Services
