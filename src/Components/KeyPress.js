import React, { useEffect } from "react";
//import "./App.css";

//create keypress component where we can control each
//key press and then  return that component as a single
// child comp in keypad component
//that we can control each key that's pressed on keyboard

export const KeyPress = ({ playSound, snd: { id, key, keyCode, src } }) => {
  //methd to called whenever  key is press down and the componentdidmount

  const handleKeyPress = (e) => {
    if (e.keyCode === keyCode) {
      playSound(key, id);
      console.log("id", id);
      let item = document.getElementsByClassName(id)[0];
      if (e.type === "keydown") {
        console.log("item", item);
        //console.log("classlis", item.classList);
        item.classList.add("carrot");
      }
      return;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  }, []);

  const handleKeyUp = (e) => {
    let item = document.getElementsByClassName(id)[0];

    if (e.keyCode === keyCode) {
      if (e.type === "keyup") {
        // console.log("class", item.classList);
        item.classList.remove("carrot");
      }
      return;
    }
  };
  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
  });
  return (
    <div>
      {/* <h3>{snd.id}</h3> */}
      <button
        className={`drum-pad ${id}`}
        key={key}
        id={id}
        onClick={() => playSound(key, id)}
      >
        <audio className="clip" id={key} src={src} />
        {key}
      </button>
    </div>
  );
};
