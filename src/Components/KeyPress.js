import React, { useEffect } from "react";
//import "./App.css";

//create keypress component where we can control each
//key press and then  return that component as a single
// child comp in keypad component
//that we can control each key that's pressed on keyboard

export const KeyPress = ({ playSound, snd: sounds }) => {
  //methd to called whenever  key is press down and the componentdidmount
  //

  const handleKeyPress = (e) => {
    console.log("sounds", sounds);
    if (e.keyCode === sounds.keyCode) {
      console.log("snd id ", sounds.id);
      playSound(sounds.key, sounds.id);
      let item = document.getElementsByClassName(sounds.id)[0];
      console.log("item", item);

      setTimeout(() => {
        // item.classList.add("carrot");
      }, 100);

      setTimeout(() => {
        // item.classList.remove("carrot");
      }, 200);
      // let each = Array.from(item).forEach((element) =>
      //   element.classList.add("carrot")
      // );
      // console.log(each);
    }
    // console.log("e", e.type);

    if (e.type === "keydown") {
      let d = document.getElementById(sounds.key);
      // console.log(d);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div>
      {/* <h3>{snd.id}</h3> */}
      <button
        className={`drum-pad ${sounds.id}`}
        key={sounds.key}
        id={sounds.id}
        onClick={() => playSound(sounds.key, sounds.id)}
      >
        <audio className="clip" id={sounds.key} src={sounds.src} />
        {sounds.key}
      </button>
    </div>
  );
};
