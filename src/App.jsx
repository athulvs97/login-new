import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Form from "./Form";
import Dashboard from "./Dashboard";
import ForgotPassword from "./ForgotPassword";
import {getStoredCreds} from './utils'
const App = () => {
  const auth_data=getStoredCreds()
  const [loggedIn, setloggedIn] = useState(Boolean(auth_data?.access_token));
  const commonProps={
    loggedIn,setloggedIn
  }

  function callbackFunction(childData) {
    setloggedIn(childData);
  }

  return (
    <Router>
      <Switch>
        <Route path="/Dashboard">
          {loggedIn ? <Dashboard {...commonProps}/> : <Redirect to="/" />}
        </Route>
        <Route path="/forgotpassword">
          <ForgotPassword {...commonProps}/>
        </Route>
        <Route path="/">
          {loggedIn ? (
            <Redirect to="/Dashboard" />
          ) : (
            <Form parentCallback={callbackFunction} />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
