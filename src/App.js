import React from "react";
import logo from "./pictures/Logo.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
        <nav>
          <a href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <img src="" alt="cart-icon" className="cart-icon" />
        </nav>
        <div className="text-box">
          <p id="description">
            {/* This is Bechir Ghouma, FullStack js developer, passionate about
            software engineering and ready to offer my new perspective that is
            fueled by my ambitions. */}
            I'M
          </p>
          <h1>BECHIR</h1>
          <h3>I MAKE FULLSTACK APPLICATIONS FOR CUSTOMERS AND COMPANIES</h3>
          <a href="">Explore My Portfolio</a>
          <a href="">Connect With Me</a>
        </div>
      </div>
    </div>
  );
}

export default App;
