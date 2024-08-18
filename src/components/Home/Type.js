import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          // "Software Developer",
          "Freelancer",
          "Full Stack Developer",
          "Chess Enthusiast",
          "Down for any Adventurous ",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
