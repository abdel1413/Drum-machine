import React from "react";

export const SecondSoundGroup = ({
  volume,
  handleVolume,
  title,
  switchSoundPlay,
}) => {
  //console.log("title", title);

  return (
    <div>
      <div className="volume-bar">
        <input
          max="1"
          min="0"
          step="0.01"
          type="range"
          volume={volume}
          onChange={handleVolume}
        />
      </div>
      <h1>{title}</h1>
      <button onClick={switchSoundPlay}>Switch</button>;
    </div>
  );
};
