import React from "react";
import logo from "../images/troll-face.png";
export default function NavBar() {
  return (
    <nav>
      <img src={logo} alt="meme--logo" className="nav--image" />
      <h1 className="nav--title">Meme Generator</h1>
      <h3 className="nav--project">React Project 3 - Meme Generator</h3>
    </nav>
  );
}
