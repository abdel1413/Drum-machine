import React from "react";

export const SecondSoundGroup = ({
  switchPower,
  power,
  volume,
  handleVolume,
  title,
  switchSoundPlay,
}) => {
  return (
    <div>
      <div>
        <button onClick={switchPower}>Power:{power ? "OFF" : "ON"}</button>
      </div>
      <div>
        <p>Volume: %{Math.round(volume * 100)}</p>
      </div>
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
