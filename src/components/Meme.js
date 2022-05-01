import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  /**
   * Challenge:
   * 1. Set up the text inputs to save to
   *    the `topText` and `bottomText` state variables.
   * 2. Replace the hard-coded text on the image with
   *    the text being saved to state.
   */

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

// import React from "react";
// import memesData from "../memesData";

// export default function Meme() {
//   const [meme, setMeme] = React.useState({
//     topText: "",
//     bottomText: "",
//     randomImage: "http://i.imgflip.com/1bij.jpg",
//   });

//   const [allMemeImages, setAllMemeImages] = React.useState(memesData);

//   function getMemeImage() {
//     const memesArray = allMemeImages.data.memes;
//     const randomNumber = Math.floor(Math.random() * memesArray.length);
//     const url = memesArray[randomNumber].url;
//     setMeme((prevMeme) => ({
//       ...prevMeme,
//       randomImage: url,
//     }));
//   }

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setMeme((prevMeme) => ({
//       ...prevMeme,
//       [name]: value,
//     }));
//   }

//   return (
//     <main>
//       <div class="row my-5 mx-3">
//         <div class="col">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Top Text"
//             name="topText"
//             value={meme.topText}
//             onChange={handleChange}
//           />
//         </div>

//         <div class="col">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Bottom Text"
//             name="bottomText"
//             value={meme.bottomText}
//             onChange={handleChange}
//           />
//         </div>
//       </div>

//       <div className="d-flex justify-content-center">
//         <button
//           type="submit"
//           class="btn btn-lg btn-block text-white button--color "
//           onClick={getMemeImage}
//         >
//           Get a new meme image <i class="fas fa-image"></i>
//         </button>
//       </div>
//       <div>
//         <img src={meme.randomImage} className="meme--image" alt="memeimage" />
//         <h2 className="meme--text top">{meme.topText}</h2>
//         <h2 className="meme--text bottom">{meme.bottomText}</h2>
//       </div>
//     </main>
//   );
// }
