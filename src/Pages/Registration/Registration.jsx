import React, {use, useState } from "react";

import { Link } from "react-router";
import { Eye, EyeOff } from "lucide-react";
import { UserContext } from "../../Context/UserContext";

const Registration = () => {

  const {createUser} = use(UserContext)

  // user Create with email and password 
  const userCreateHandle = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    createUser(email,password)
    .then((result) => {
      console.log(result.user)
    })
    .catch( (error) => {
      console.log(error)
    })
  }


  const [password, showPassword] = useState(false);

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-3xl">Please Register Now!</h2>
        <form onSubmit={userCreateHandle}>
          <fieldset className="fieldset">
            {/* name field  */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
            {/* email field  */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* password field  */}
            <div className="relative">
              <label className="label">Password</label>
              <input
                type={password ? "password" : "text"}
                name="password"
                className="input"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => showPassword(!password)}
                className="absolute top-6 right-5"
              >
                {password ? <Eye /> : <EyeOff />}
              </button>
            </div>
            {/* forgot password field  */}
            <div>
              <a className="link link-hover text-blue-400 underline">
                Forgot password?
              </a>
            </div>
            {/* btn  */}
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p>
            Allready Have an Account? Please
            <Link to="/login" className="text-blue-500 underline">
              Login
            </Link>
          </p>
          <div>
            <p className="text-green-400 text-center mt-5"></p>
            <p className="text-red-400 text-center mt-5"></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
