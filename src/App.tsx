import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch, // for server rendering
  Route,
  
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/Homepage/HomePage";
import "./App.css";
import store from "./components/redux/store";
import Signup from "./components/authRoute/SignUp";
import SignIn from "./components/authRoute/SignIn";
import setAuthToken from "./utils/setAuthToken"; ;


if (localStorage.getItem("Authorization")) {
  setAuthToken(localStorage.getItem("Authorization")!);
}
function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Router>
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/register">
              <Signup />
            </Route>
            <Route exact path="/login">
              <SignIn />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    </Provider>
  );
}

export default App;
