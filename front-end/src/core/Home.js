import React,{useEffect,useState} from 'react';
import Layout from './../core/Layout'
import {Link} from 'react-router-dom'
import axios from 'axios';


const Home =() =>{
  const initialData = {
    email:'',
    date:'',
  }
  const [contact,setContact]= useState([])
  const [formData,setData] = useState(initialData)
  const getContact =async ()=>{
    const {data} = await axios.get('http://localhost:3001/api/clients/info');
    if(data) setContact(data)
  }
  useEffect(()=>{
    getContact()
  },[])
 

  const handleClick =async (e)=>{
   e.preventDefault();
   try {
      const {data} = await axios.post('http://localhost:3001/api/clients/search',formData)
    if(data) setContact(data)
   } catch (error) {
     if(error) console.log(error.response);
   }
  }
  const handelChange = (e)=>{
    const {name,value} = e.target
    setData({...formData,[name]:value})
  }
 
 const list = () => (
    <div className="container">
    
       <form>
        <div className="form-group">
          <label for="validationCustom01"></label>
          <input
            onChange={handelChange}
            name="email"
            type="email"
            className="form-control"
            id="validationCustom01"
            placeholder="Email"
            required
          />
          <input
            onChange={handelChange}
            name="date"
            type="date"
            className="form-control"
            id="validationCustom01"
            placeholder="Date"
            required
          />
         <button
          onClick={handleClick}
          type="submit"
          className="btn btn-primary mb-3"
        >
          Search
        </button>
        </div>
        </form>
       <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Message</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
         {contact &&
            contact.map((element,index)=>(
              <tr>
                <th scope="row">{index+1}</th>
                <td>{element.first_name}</td>
                <td>{element.last_name}</td>
                <td>{element.email}</td>
                <td>{element.phone}</td>
                <td>{element.message}</td>
                <td>{element.date}</td>
                <td>
                  <Link to={`/reply/${element._id}`}>
                    <button  className="btn btn-primary"> Repondre</button>
                  </Link>
                </td>
               
          </tr>
           ))
         }
        </tbody>
      </table>
    </div>
  )

  return (
    <div>
       <Layout title="List information">
           <div className="row">
               <div className="col-md-6 mx-auto">

                 {list() }
               </div>
            </div>
           

       </Layout>
    </div>
)
}

export default Home
