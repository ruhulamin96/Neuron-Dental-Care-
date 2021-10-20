import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Navbar.css";
function Navbar() {
  const { users, logOut } = useFirebase();
  return (
    <div>
      <div className="container">
        <div className="row ">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">
              <h3 className="text-primary">Neuron <br /> Dental Care</h3>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto ">
                <li class="nav-item active">
                  <Link class="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link" to="/contact">
                    Dental Tips
                  </Link>
                </li>
                <li class="nav-item active">
                  <p class="nav-link">
                    <span>
                      Welcome{" "}
                      <span className="text-primary">{users?.displayName}</span>
                    </span>
                  </p>
                </li>
              </ul>
              {users.email || users.displayName ? (
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                  onClick={logOut}
                >
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Login
                  </button>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
