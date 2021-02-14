import React, {lazy, Suspense} from "react"
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/UI/Loading";

const  Navigation= lazy( () => import("./components/Navigation/Navigation"));
const  BottomNavigation= lazy( () => import("./components/Navigation/BottomNavigation"));
const  Home= lazy( () => import("./pages/Home"));
const  Inbox= lazy( () => import("./pages/Inbox"));
const  Login= lazy( () => import("./pages/Login"));
const  Register= lazy( () => import("./pages/Register"));
const  PostDetail= lazy( () => import("./pages/PostDetail"));
const  Profile= lazy( () => import("./pages/Profile"));
const  NewPost= lazy( () => import("./pages/NewPost"));
const  Search= lazy( () => import("./pages/Search"));
const  Notification= lazy( () => import("./pages/Notification"));


function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loading />} >
        <Navigation />
        <BottomNavigation />
        
        <Switch>
          <Route path="/p/:postid" component={PostDetail} />
          <Route path="/profile" component={Profile} />
          <Route path="/newpost" component={NewPost} />
          <Route path="/search" component={Search} />
          <Route path="/notification" component={Notification} />
          <Route path="/inbox" component={Inbox} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} exact />
        </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
