import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { auth } from '../../Firebase/Firebase.init';

const Login = () => {
  // all state here 
  const [success,setSuccess] = useState('')

  const signInWithEmailPasswordHandle = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    // console.log(email,password)

    signInWithEmailAndPassword(auth,email,password)
    .then( (result) => {
      const user = result.user
      setSuccess('Login Successfully')
    })
    .catch( (error) => {
      console.log(error)
    })
  }


 

  
    return (

         <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className='text-3xl'>Please Login Now!</h2>
            <form onSubmit={signInWithEmailPasswordHandle}>
                <fieldset className="fieldset">
                  {/* email field  */}
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              {/* password field  */}
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              
              <button  className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            </form>
            <p>Are you new here? Please  <Link to='/regester' 
            className='text-blue-500 underline hover:text-blue-700'>Register</Link></p>
            <div>
            <p className='text-green-400 text-center'>{success}</p>
          </div>
          </div>
          
        </div>
    )
};

export default Login;