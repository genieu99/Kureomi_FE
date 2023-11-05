import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Start from "./pages/Start/Start";
import SignUpName from "./pages/SignUp/SignUpName";
import SignUpEmail from "./pages/SignUp/SignUpEmail";
import SignUpPW from "./pages/SignUp/SignUpPW";
function App() {
  return (
    <div className="App">
      <Start />
      <SignUpName></SignUpName>
      <SignUpEmail></SignUpEmail>
      <SignUpPW></SignUpPW>
    </div>
  );
}

export default App;
