import "./App.css";
import LogIn from "./pages/LogIn/logIn";
import SignUp from "./pages/register/SignUp";
import Landing from "./pages/Landing/landingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
