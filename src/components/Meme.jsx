import React from "react";
import memeData from "../memeData";

export default function Meme() {
  function imageName() {
    const absData = memeData.data.memes;
    // ! Generating a random number
    const randomIndex = Math.floor(Math.random() * absData.length);
    const url = absData[randomIndex].url;
    console.log(url);
  }
  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top Text" />
        <input type="text" className="form--input" placeholder="Bottom Text" />
        <button className="form--button" onClick={imageName}>
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}
