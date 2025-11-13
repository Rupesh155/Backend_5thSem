import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Otp = () => {
  const [input, setInput] = useState({
    number: "",
   
  });

  function loginFun(e) {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  }

  async function done() {
    try {
      console.log("DATA GOING TO BACKEND:", input);

      const res = await axios.post("http://localhost:4000/send-otp", input, {
      });

      console.log("SERVER RESPONSE →", res.data);

    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  return (
    <div>
      <fieldset>  
        <input 
          type='number'
          onChange={loginFun}
          name='number'
          value={input.number}
          placeholder='Enter your number'
        />

        <br/><br/>



        <button onClick={done}>login</button>
      </fieldset>

  
    </div>
  )
}

export default Otp;

