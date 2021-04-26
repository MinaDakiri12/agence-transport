import React,{useEffect,useState} from 'react'
import Layout from './../core/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Reply(props) {
  const {id} = useParams()
  const [message,setMessage] = useState('')
  const handleClick =async (e)=>{
    e.preventDefault();
    try {
        const res = await axios.post(`http://localhost:3001/api/clients/reply/${id}`,{message});
        if(res) props.history.push('/')
      } catch (error) {
        if(error) console.log(error.response);
      }
  }
  const handleChange = (e)=>{
    console.log(e.target.value);
    setMessage(e.target.value)
  }
   const [client,setClient]= useState([])

  const getClient =async ()=>{
   try {
      const {data} = await axios.post(`http://localhost:3001/api/clients/single/${id}`);
    if(data) setClient(data)
   } catch (error) {
     if(error) console.log(error.response);
   }
  }
  useEffect(()=>{
    getClient()
  },[])
  const reply = () => (
     <div className="container">
     {
       client && (
         <>
              
          <p>
            <span>A : {client.first_name} {client.last_name}</span> 
          </p>
          <p>
            <span>Email :  {client.email}</span> 
          </p>
          <p>
            <span>Message :{client.message} </span> 
          </p>
         </>
       )
     }

      <form>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Entre Your Message</label>
          <textarea
            onChange={handleChange}
            name="message"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button
          onClick={handleClick}
          type="submit"
          className="btn btn-primary mb-3"
        >
          Submit
        </button>
      </form>
    </div>
  )
  return (
    <div>
       <Layout title="Reply">
           <div className="row">
               <div className="col-md-6 mx-auto">

                 {reply() }
               </div>
            </div>
           

       </Layout>
    </div>
)
  
}

export default Reply