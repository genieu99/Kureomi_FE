import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Start from "./pages/Start/Start";
import SignUpName from "./pages/SignUp/SignUpName";
import SignUpEmail from "./pages/SignUp/SignUpEmail";
import SignUpPW from "./pages/SignUp/SignUpPW";
import SignUpSucess from "./pages/SignUp/SignUpSucess";

const App = () => {
  return (
    <div>
      <Route path="/" component={Start} />
      <Route path="/SignUpName" component={SignUpName} />
    </div>
  );
};

export default App;
