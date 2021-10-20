import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Login() {
  const {
    googleSignIn,
    loginUser,
    emailHandle,
    passwordHandle,
    isErr,
    setUsers,
    setIsloding,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";
  //  console.log(location.state.from);
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        setUsers(result.user);
        history.push(redirect_url);
        console.log(result.user);
      })
      .finally(() => setIsloding(false));
  };
  return (
    <div>
      <div className="container w-50">
        <div className="row">
          <h1 className="text-center text-primary">Log In</h1>
          <form action="" onSubmit={loginUser}>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label fs-4">
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
              <label for="formGroupExampleInput2" class="form-label fs-4">
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
            {isErr && (
              <h3 className="text-danger">Email or password is incorrect</h3>
            )}
            <div>
              <p className="text-center fs-3">
                Are you new here? <Link to="/register">Create Account</Link>
              </p>
            </div>
          </form>
          <div className="text-center">
            <h3>-----------------------OR-------------------</h3>
            <button onClick={handleGoogleLogin} className="btn btn-danger">
              Github Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
