import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import React from 'react';


const NavBar = ({isUserLoggedIn,logout})=>{
    return(
        <div>
            <nav>
            <ul className="top-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Posts">Posts</Link>
              </li>
              <li>
                <Link to="/Profile">Profile</Link>
              </li>
              <li>
                {/* <Link to="/Login">Login</Link> */}
                {!isUserLoggedIn && (
                  <Link  to="/login">
                    Login
                  </Link>
                )}
                {isUserLoggedIn && (
                  <button
                    className="top-nav--link"
                    onClick={() => {
                      logout();
                      axios.defaults.headers.common["Authorization"] = "";
                    }}
                  >
                    Logout
                  </button>
                )}
              </li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
            </ul>
          </nav>
        </div>
    )
};
export default NavBar;
