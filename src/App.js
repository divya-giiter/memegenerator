import React from "react";
import "./style.css";
import Header from "./components/Header";
import Meme from "./components/Meme";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <Header />
      <Meme />
    </div>
  );
}
