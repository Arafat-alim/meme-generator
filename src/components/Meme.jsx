import React, { useState } from "react";
import memeData from "../memeData";

export default function Meme() {
  // ! Creating a state
  const [memeImage, setMemeImage] = useState([]);
  function getImage() {
    const absData = memeData.data.memes;
    // ! Generating a random number
    const randomIndex = Math.floor(Math.random() * absData.length);
    const url = absData[randomIndex].url;
    console.log(url);
    setMemeImage(url);
  }
  return (
    <main>
      <div className="meme">
        <input type="text" className="meme--input" placeholder="Top Text" />
        <input type="text" className="meme--input" placeholder="Bottom Text" />
        <button className="meme--button" onClick={getImage}>
          Get a new meme image 🖼
        </button>
        <img src={memeImage} className="meme--image" />
      </div>
    </main>
  );
}
