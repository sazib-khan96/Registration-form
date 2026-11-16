import React from "react";

const Registration = () => {
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-3xl">Please Register Now!</h2>
        <form action="">
          <fieldset className="fieldset">
            {/* name field  */}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />
            {/* email field  */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* password field  */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover text-blue-400 underline">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Registration;
