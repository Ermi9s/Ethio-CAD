import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./components/Footer/footer";
import Nav from "./components/nav-bar/Nav";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <App />
    <Footer />
  </React.StrictMode>
);
