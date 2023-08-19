import React, { useRef } from "react";
import { PowerButton } from "./PowerButton";
import { SwitchSoundButton } from "./SwitchSoundButton";
import { VolumeSlider } from "./VolumeSlider";

export const SecondSoundGroup = ({
  switchPower,
  power,
  volume,
  handleVolume,
  title,
  switchSoundPlay,
  isChecked,
  isActive,
}) => {
  return (
    <div>
      <PowerButton label="Power" power={power} handleDisabled={switchPower} />

      <button ref={isActive} onClick={switchPower}>
        {power ? "OFF" : "ON"}
      </button>

      <div className="second-column">
        <p className="percentage">Volume: %{Math.round(volume * 100)}</p>

        <VolumeSlider volume={volume} handleVolume={handleVolume} />

        <div id="display">{title}</div>

        <SwitchSoundButton
          isChecked={isChecked}
          switchSoundPlay={switchSoundPlay}
          label="Switch"
        />

        {/* <button onClick={switchSoundPlay}>Switch</button> */}
      </div>
    </div>
  );
};
