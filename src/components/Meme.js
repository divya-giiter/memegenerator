import { set } from "mongoose";
import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState();

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <div class="row my-5 mx-3">
        <div class="col">
          <input type="text" className="form-control" placeholder="Top Text" />
        </div>
        <div class="col">
          <input
            type="text"
            className="form-control"
            placeholder="Bottom Text"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="submit"
          class="btn btn-lg btn-block text-white button--color "
          onClick={getMemeImage}
        >
          Get a new meme image <i class="fas fa-image"></i>
        </button>
      </div>
      <img src={memeImage} className="meme--image" />
    </main>
  );
}
