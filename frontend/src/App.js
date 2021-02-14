import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import BottomNavigation from "./components/Navigation/BottomNavigation";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetail from "./pages/PostDetail";
import Profile from "./pages/Profile";
import NewPost from "./pages/NewPost";
import Search from "./pages/Search";
import Notification from "./pages/Notification";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <BottomNavigation />
        <Switch>
          <Route path="/p/:postid">
            <PostDetail />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/newpost">
            <NewPost />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/notification">
            <Notification />
          </Route>
          <Route path="/inbox">
            <Inbox />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
