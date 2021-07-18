import logo from './logo.svg';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./components/HomePage"
import PostsPage from"./components/PostsPage"
import PostDetail from './components/PostDetail';

function App() {
  return (
    <div >
       <Router>
      <div >
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
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Posts">
            <PostsPage/>
          </Route>
          <Route path="/postDetail/:id">
            <PostDetail />
          </Route>
          <Route path="/Profile">
            
          </Route>
          <Route path="/Login">
            
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
