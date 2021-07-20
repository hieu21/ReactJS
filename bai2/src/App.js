
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import PostsPage from "./components/PostsPage";
import PostDetail from "./components/PostDetail";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import {  useState } from "react";
import React from "react";

function App() {
  const [token, setToken] = useState({
    name:null,
    id:null,
  });
  console.log(token);
  return (
    <div>
      <Router>
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
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Posts">
              <PostsPage />
            </Route>
            <Route path="/postDetail/:id">
              <PostDetail />
            </Route>
            <Route path="/Profile"
            exact
              render ={()=>{if(token.id ===null){
                return <LoginPage setToken={setToken}/>
              }else{
                return <ProfilePage token={token} />
              }
            }}            
            />
              
            
            <Route path="/Login">
              <LoginPage setToken={setToken}  />
            </Route>
            <Route path="/Register">
              <RegisterPage/>
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
