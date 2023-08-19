import React, { useEffect } from "react";
//import "./App.css";

//create keypress component where we can control each
//key press and then  return that component as a single
// child comp in keypad component
//that we can control each key that's pressed on keyboard

export const KeyPress = ({ playSound, sound: { id, key, keyCode, src } }) => {
  //methd to called whenever  key is press down and the componentdidmount

  const handleKeyPress = (e) => {
    if (e.keyCode === keyCode) {
      playSound(key, id);

      // item.classList.add("carrot");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  }, []);

  const handleKeyUp = (e) => {
    if (e.keyCode === keyCode) {
      let item = document.getElementById(id);
      //console.log("item up ", item);
      //item.classList.remove("carrot");
    }
  };
  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
  }, []);
  return (
    <div>
      {/* <h3>{snd.id}</h3> */}
      <button
        className={`drum-pad `}
        key={key}
        id={keyCode}
        onClick={() => playSound(key, id)}
      >
        <audio className="clip" id={key} src={src} />
        {key}
      </button>
    </div>
  );
};
