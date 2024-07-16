import "./App.css";
import LogIn from "./pages/LogIn/logIn";
import SignUp from "./pages/register/SignUp";
import Landing from "./pages/Landing/landingPage";
import Issue from "./pages/Issue-page/Issue";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/issue" element={<Issue />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
