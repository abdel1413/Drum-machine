import React from "react";
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
}) => {
  return (
    <div>
      <PowerButton label="Power" power={power} handleDisabled={switchPower} />

      <button onClick={switchPower}>{power ? "OFF" : "ON"}</button>
      <div className="second-column">
        <div>
          <p className="percentage">Volume: %{Math.round(volume * 100)}</p>
        </div>
        <VolumeSlider volume={volume} handleVolume={handleVolume} />
        <div id="display">{title || volume}</div>

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
