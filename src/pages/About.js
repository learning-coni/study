import React from "react";
import Slider from "../components/Slider";

let slides = [
  {
    background: "https://www.w3schools.com/w3images/coffee.jpg",
    text: "Coffee",
  },
  {
    background: "https://www.w3schools.com/w3images/workbench.jpg",
    text: "Workbench",
  },
  {
    background: "https://www.w3schools.com/w3images/sound.jpg",
    text: "Sound",
  },
];

const About = () => {
  return (
    <div className="about">
      <p>about page</p>
      <Slider slides={slides}></Slider>
    </div>
  );
};

export default About;
