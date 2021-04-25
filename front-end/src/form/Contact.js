import React, {useState} from 'react'
import Layout from './../core/Layout'
import {Redirect} from 'react-router-dom'
import axios from 'axios'


function Contact(props) {

    const[user, setUser] = useState({
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        message:''
    })

    const handleChange = e =>{
        setUser({...user,[e.target.id]: e.target.value})
    }
    
    const submit = e => {
        e.preventDefault();

      const res =  axios.post("http://localhost:3000/api/clients/client" , user)
        .then(res => console.log(res.user));
        if(res) props.history.push('/') 

      
        


    }

   const form = () =>(
        <form onSubmit={submit}>
            <div className="from-group">
                <label htmlFor="first_name" className="text-muted">First name</label>
                <input onChange={handleChange}  type="text" className="form-control" id="first_name" />
               
            </div>
            <div className="from-group">
                <label htmlFor="last_name" className="text-muted">Last name</label>
                <input onChange={handleChange} type="text" className="form-control" id="last_name" />
               
            </div>
            <div className="from-group">
                <label htmlFor="email" className="text-muted">Email</label>
                <input onChange={handleChange} type="email" className="form-control" id="email" />
               
            </div>
            <div className="from-group">
                <label htmlFor="phone" className="text-muted">Phone</label>
                <input onChange={handleChange} type="text" className="form-control" id="phone" />
               
            </div>
            <div className="from-group">
                <label htmlFor="message" className="text-muted w-100 p-3">Message</label>
                <input onChange={handleChange}  type="text" className="form-control" id="message" />
               
            </div>
            
            <button className="btn btn-lg btn-block btn-outline-info mt-4">Send</button>


            
        </form>
        
   )
   return (
    <div>
       <Layout title="">
           <div className="row">
               <div className="col-md-6 mx-auto">

                 { form() }
               </div>
            </div>
           

       </Layout>
    </div>
)
 }


export default Contact
