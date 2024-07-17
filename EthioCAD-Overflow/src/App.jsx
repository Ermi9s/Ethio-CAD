import "./App.css";
import LogIn from "./pages/LogIn/logIn";
import SignUp from "./pages/register/SignUp";
import Landing from "./pages/Landing/landingPage";
import MainPage from "./pages/mainPage/mainPage";
import IssuePage from "./pages/Issue-page/IssuePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/issue" element={<IssuePage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/ethioCAD" element ={<MainPage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
