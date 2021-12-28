import Typewriter from "typewriter-effect";

import React from "react";

const My = () => {
  return (
    <div className="My">
      <Typewriter
        options={{ autoStart: true, loop: true }}
        onInit={(typewriter) => {
          typewriter

            .typeString("FRONTEND DEVELOPER <br/><br/>LEE Y.G")

            .pauseFor(100)

            .start();
        }}
      />
    </div>
  );
};

export default My;
