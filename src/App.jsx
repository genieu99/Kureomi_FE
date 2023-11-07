import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start/Start";
import SignUpName from "./pages/SignUp/SignUpName";
import SignUpEmail from "./pages/SignUp/SignUpEmail";
import SignUpPW from "./pages/SignUp/SignUpPW";
import SignUpSucess from "./pages/SignUp/SignUpSucess";
import Login from "./pages/Login/Login";
import VisitHome from "./pages/Visit/VistHome";
import VisitSend from "./pages/Visit/VisitSend";

import "./index.css";

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
        <Route path="/VisitHome" element={<VisitHome />} />{" "}
        <Route path="/VisitSend" element={<VisitSend />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
