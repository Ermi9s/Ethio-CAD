import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <nav>
        <h2>
          Ethiocad <span>Overflow</span>
        </h2>

        <ul>
          <li>ContactDev</li>
          <li>Issues</li>
          <li>Questions</li>
        </ul>

        <label htmlFor="finder">
          <input id="finder" type="text" placeholder="Search for topic" />
          <i className="bx bx-search bx-sm"></i>
        </label>

        <div className="account">
          <Link to="#" id="acc_one">Sign Up</Link>
          <Link to="#" id="acc_two">Log in</Link>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
