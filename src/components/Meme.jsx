import React, { useEffect, useState } from "react";

export default function Meme() {
  //! Fetching api  using useEffect
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImage(data));
  }, []);

  // ! Creating a state
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  //! for image updating UI
  const [allMemeImage, setAllMemeImage] = useState([]);

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

  // handling  data
  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top Text"
          value={meme.topText}
          onChange={handleChange}
          name="topText"
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom Text"
          value={meme.bottomText}
          onChange={handleChange}
          name="bottomText"
        />
        <button className="form--button" onClick={getImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="memes" />
        <h2 className="meme--text top ">{meme.topText}</h2>
        <h2 className="meme--text bottom ">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
