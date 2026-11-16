import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (

         <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className='text-3xl'>Please Login Now!</h2>
            <form action="">
                <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            </form>
            <p>Are you new here? Please  <Link to='/regester' className='text-blue-500 underline hover:text-blue-700'>Register</Link></p>
          </div>
        </div>
    )
};

export default Login;