

import { Link } from "react-router";
import { UserContext } from "../../Context/UserContext";
import { use } from "react";


const Login = () => {
  const {userLogin} = use(UserContext)
  // all state here
  const signInWithEmailPasswordHandle = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    userLogin(email,password)
    .then((result) => {
      console.log(result.user)
    })
    .catch( err => {
      console.log(err)
    })
    
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-3xl">Please Login Now!</h2>
        <form onSubmit={signInWithEmailPasswordHandle}>
          <fieldset className="fieldset">
            {/* email field  */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* password field  */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />

            <button
              className="text-white bg-green-500 border-none p-3 rounded-2xl w-full"
            >
              Login
            </button>
          </fieldset>
        </form>
        <p>
          Are you new here? Please{" "}
          <Link
            to="/regester"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Register
          </Link>
        </p>
        <div>
          <p className="text-green-400 text-center"></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
