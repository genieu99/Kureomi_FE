import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start/Start";
import SignUpName from "./pages/SignUp/SignUpName";
import SignUpEmail from "./pages/SignUp/SignUpEmail";
import SignUpPW from "./pages/SignUp/SignUpPW";
import SignUpSucess from "./pages/SignUp/SignUpSucess";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/signupname" element={<SignUpName />} />
        <Route path="/SignUpEmail" element={<SignUpEmail />} />{" "}
        <Route path="/SignUpPW" element={<SignUpPW />} />{" "}
        <Route path="/SignUpSucess" element={<SignUpSucess />} />{" "}
        <Route path="/Login" element={<Login />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
