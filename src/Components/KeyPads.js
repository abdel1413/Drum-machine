import React from "react";
import SoundData from "../Components/SoundData";

export const KeyPads = ({ playSound }) => {
  return (
    <div id="pad-container">
      {SoundData.map((sound) => (
        <button
          className="drum-pad"
          key={sound.id}
          id={sound.id}
          onClick={() => playSound(sound.key)}
        >
          {" "}
          {sound.key}
          <audio className="clip" id={sound.key} src={sound.src}></audio>
        </button>
      ))}
    </div>
  );
};
