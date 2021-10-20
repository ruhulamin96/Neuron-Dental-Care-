import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Register() {
  const { googleSignIn, nameHandle, emailHandle, passwordHandle, createUser } =
    useAuth();
  return (
    <div>
     
      <div className="container w-50">
        <div className="row">
        <h1 className="text-center text-primary">Create Account</h1>
          <form onSubmit={createUser} action="">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label fs-3">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Name"
                onBlur={nameHandle}
                required
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label fs-3">
                Email
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Email Address"
                onBlur={emailHandle}
                required
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label fs-3">
                Password
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Password"
                onBlur={passwordHandle}
                required
              />
            </div>
            <button className="btn btn-primary">Submit</button>
            <div>
              <p className="text-center fs-3">
                Already Have An Account? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
          <div className="text-center">
            <h3>-----------------------OR-------------------</h3>
            <button onClick={googleSignIn} className="btn btn-danger">Github Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
