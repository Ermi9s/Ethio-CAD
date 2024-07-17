import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { Button } from "@mui/material";

function Nav() {
  return ReactDOM.createPortal(
    <header>
      <nav>
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          {" "}
          <h2>
            Ethiocad <span>Overflow</span>
          </h2>
        </Link>
        <ul>
          <li>ContactDev</li>
          <li>
            <Link
              to="/issue"
              style={{ color: "black", textDecoration: "none" }}
            >
              Issues
            </Link>
          </li>
          <li>Questions</li>
        </ul>

        <label htmlFor="finder">
          <input id="finder" type="text" placeholder="Search for topic" />
          <i className="bx bx-search bx-sm"></i>
        </label>

        <div className="account">
          <Link to="/sign-up" id="acc_one">
            Sign Up
          </Link>
          <Link to="/login" id="acc_two">
            Log in
          </Link>
        </div>
      </nav>
    </header>,
    document.getElementById("nav-bar")
  );
}

export default Nav;
