import React from "react";
import logo from "./pictures/Logo.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
        <nav>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <ul id="nav_list">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
        <p id="description">
          This is Bechir Ghouma, FullStack js developer, passionate about
          software engineering and ready to offer my new perspective that is
          fueled by my ambitions.
        </p>
      </div>
    </div>
  );
}

export default App;
