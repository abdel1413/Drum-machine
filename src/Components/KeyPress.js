import React, { useEffect } from "react";
//import "./App.css";

//create keypress component where we can control each
//key press and then  return that component as a single
// child comp in keypad component
//that we can control each key that's pressed on keyboard

export const KeyPress = ({ playSound, snd }) => {
  //methd to called whenever  key is press down and the componentdidmount

  const handleKeyPress = (e) => {
    console.log("snd", snd);
    if (e.keyCode === snd.keyCode) {
      playSound(snd.key, snd.id);

      console.log(" snd.id", snd.id);
      console.log("ev ", snd.id);

      document.getElementById("display").textContent = snd.id;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  });

  return (
    <div>
      {/* <h3>{snd.id}</h3> */}
      <button
        className="drum-pad"
        key={snd.key}
        id={snd.id}
        onClick={() => playSound(snd.key, snd.id)}
      >
        <audio className="clip" id={snd.key} src={snd.src} />
        {snd.key}
      </button>
    </div>
  );
};
