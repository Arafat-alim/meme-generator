import React, { useState } from "react";
import memeData from "../memeData";

export default function Meme() {
  // ! Creating a state
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  //! for image updating UI
  const [allMemeImage, setAllMemeImage] = useState(memeData);

  function getImage() {
    const absData = allMemeImage.data.memes;
    // ! Generating a random number
    const randomIndex = Math.floor(Math.random() * absData.length);
    const url = absData[randomIndex].url;
    console.log(url);
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: url,
      };
    });
  }
  return (
    <main>
      <div className="meme">
        <input type="text" className="meme--input" placeholder="Top Text" />
        <input type="text" className="meme--input" placeholder="Bottom Text" />
        <button className="meme--button" onClick={getImage}>
          Get a new meme image 🖼
        </button>
        <img src={meme.randomImage} className="meme--image" />
      </div>
    </main>
  );
}
