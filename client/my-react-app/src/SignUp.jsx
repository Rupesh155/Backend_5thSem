import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
        <fieldset>  
        <input type='text' placeholder='Enter your Name'/>
        <br></br>
        <br></br>
        <input type='email' placeholder='Enter your email'/>
        <br></br>
        <br></br>
        <input type='password' placeholder='Enter your pass'/>
        <br></br>
        <br></br>

        <button>signup</button>
        </fieldset> 
        <fieldset>
            <Link to={'/login'}>
            <button>login</button>
            </Link>
        </fieldset>

    </div>
  )
}

export default SignUp