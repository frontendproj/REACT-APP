import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Contact = () =>  {
    const [data, setData] = useState({
        FullName:" ",
        Phone: " ",
        Email:" ",
        Message:" "

    });
    const inputText = (event) =>{
      const {name, value} = event.target;
       
        setData((preValue) => {
        return {
            ...preValue,
            [name]: value,
        };
        })

    }
const submitForm = (e) => {
    e.preventDefault();
    alert(`My FullName:${data.FullName} ,Phone number:${data.Phone},email id :${data.Email}, Message:${data.Message} `)
}
    
    return (
        <>
            <div className="container">
              
                   
                        <form action="#" onSubmit={submitForm}>
                            <div className="form-group">
                                <label>
                                    FullName</label>:<input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Enter Your fullname"
                                    name="FullName"
                                    onChange={inputText}
                                    value={data.value}
                                        
                                    />
                                
                                </div>
                                <div className="form-group">
                                <label>
                                    Phone</label>:<input 
                                    type="number"
                                    
                                    placeholder="Enter your phone number"
                                    name="Phone"
                                    className="form-control"
                                    onChange={inputText}
                                        value={data.value}
                                    />

                                
                                </div>
                                <div className="form-group">
                                <label>
                                    Email </label>:<input type="text"
                                    placeholder="Enter your Email Id"
                                    name="Email"
                            
                                    className="form-control"
                                    onChange={inputText}
                                        value={data.value}
                                    />
                               
                                </div>
                                <div className="form-group">
                                <label>
                                    Message</label>:<textarea name="Message" 
                                    onChange={inputText} 
                                    value={data.value}
                                    
                                    className="form-control"
                                    >

                                    </textarea>
                                
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    
            
            
        </>
    )
   
}

export default Contact
 