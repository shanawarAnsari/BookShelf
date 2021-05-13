import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import AppNavbar from "../src/Components/AppNavbar";
import Home from "../src/Components/Home";
import RegisterForm from "./Components/Login/RegisterForm";
import BookShelfDash from "./Components/BookShelfDash/BookShelfDash"
function App() {
  return (
    <div className="App">
       <Router>
          <AppNavbar />
          <Switch>
            <Route exact path="/" component={Home} />           
            <Route exact path="/Register" component={RegisterForm} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/BookShelf" component={BookShelfDash} />           
            <Redirect to="/" />
          </Switch>
         
        </Router>
     
    </div>
  );
}

export default App;
