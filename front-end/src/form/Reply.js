import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Reply(props) {
  const {id} = useParams()
  const [message,setMessage] = useState('')
  const handleClick =async (e)=>{
    e.preventDefault();
    try {
        const res = await axios.post(`http://localhost:3000/api/clients/reply/${id}`,{message});
        if(res) props.history.push('/')
      } catch (error) {
        if(error) console.log(error.response);
      }
  }
  const handleChange = (e)=>{
    console.log(e.target.value);
    setMessage(e.target.value)
  }
   const [contact,setContact]= useState([])

  const getContact =async ()=>{
   try {
      const {data} = await axios.post(`http://localhost:3000/api/clients/single/${id}`);
    if(data) setContact(data)
   } catch (error) {
     if(error) console.log(error.response);
   }
  }
  useEffect(()=>{
    getContact()
  },[])
  return (
     <div className="container">
     {
       contact && (
         <>
              <h1> Repondre </h1>
          <p>
            <span>A : {contact.first_name} {contact.last_name}</span> 
          </p>
          <p>
            <span>Email :  {contact.email}</span> 
          </p>
          <p>
            <span>Message :{contact.message} </span> 
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
}

export default Reply