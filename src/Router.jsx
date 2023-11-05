// Routes.js
import React from "react";
import { Router, Route } from "react-router-dom";
import Start from "./pages/Start/Start";
import SignupName from "./pages/SignUp/SignUpName";
import SignUpPW from "./pages/SignUp/SignUpPW";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/Start">
          <Start />
        </Route>
        <Route path="/SignupName">
          <SignupName />
        </Route>
        <Route path="/SignUpEmail">
          <SignUpEmail />
        </Route>
        <Route path="/SignUpPW">
          <SignUpPW />
        </Route>
      </Switch>
    </Router>
  );
}
