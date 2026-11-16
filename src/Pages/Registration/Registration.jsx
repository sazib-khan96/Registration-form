import React, { use, useState } from "react";
import{createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../Firebase/Firebase.init'
import { Link } from "react-router";
import { Eye,EyeOff  } from "lucide-react";


const Registration = () => {
// all state here 
const [success, setSuccess] = useState('')
const [error, setError] = useState('')
const [password, showPassword] = useState(false)

// get all input field value 
const handleformSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    // console.log(name,email,password)

    // fast of all on error and no success 
    setSuccess('')
    setError('')

    const hasUppercase = /[A-Z]/.test(password)
    const hasOneNumber = /[0-9]/.test(password)
    // Password length checked 
   if(password.length < 6 ) {
    setError('Password must be 6 Charecter or longer')
    return
   } 
   else if (!hasUppercase) {
           setError('Password must contain at least one uppercase letter.')
           return
   }
   else if(!hasOneNumber){
      setError('Password must contain at least one number.')
      return
   }

   setError('')


//  creat user with firebase 
createUserWithEmailAndPassword(auth,email,password)
.then( (result) => {
    const user = result.user
    setSuccess('Account Created Successfully') 
    e.target.reset() //input field clear 

})
.catch( error =>{
    setError(error.message)
})

}

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-3xl">Please Register Now!</h2>
        <form onSubmit={handleformSubmit}>
          <fieldset className="fieldset">
            {/* name field  */}
            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Name" />
            {/* email field  */}
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            {/* password field  */}
           <div className="relative">
             <label className="label">Password</label>
            <input type={password ? 'password' : 'text'}
             name="password" 
             className="input" 
             placeholder="Password" />
            <button type="button" onClick={ () => showPassword(!password) } className="absolute top-6 right-5">{password ?  <Eye /> : <EyeOff />}</button>
           </div>
            {/* forgot password field  */}
            <div>
              <a className="link link-hover text-blue-400 underline">Forgot password?</a>
            </div>
            {/* btn  */}
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p>Allready Have an Account? Please <Link to='/login' className="text-blue-500 underline">Login</Link> </p>
          <div>
            <p className="text-green-400 text-center mt-5">{success}</p>
            <p className="text-red-400 text-center mt-5">{error}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
