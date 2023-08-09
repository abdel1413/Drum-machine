import "./App.css";
import { FaFreeCodeCamp } from "react-icons/fa";
import { KeyPads } from "./Components/KeyPads";
import { useState } from "react";
import { SecondSoundGroup } from "./Components/SecondSoundGroup";
import SoundData from "./Components/SoundData";
import SoundData2 from "./Components/SoundData2";

//object to match with allowing to switch sound groups
const typeOfSound = {
  heaterKit: "heater kit",
  smoothSound: "smooth sound",
};

// put all sound groups objects into one single object
const soundGroups = {
  heaterKit: SoundData,
  smoothSound: SoundData2,
};

function App() {
  const [soundType, setSoundType] = useState("heaterKit");
  const [sounds, setSounds] = useState(soundGroups[soundType]);
  const [soundTitle, setSoundTitle] = useState("");
  // console.log("sounds grp ////", soundGroups[soundType]);

  const playSound = (key, sound) => {
    setSoundTitle(sound);
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  };

  //method to switch sound voice when clicked on
  //passed as props to second group.
  const switchSoundPlay = () => {
    setSoundTitle("");
    if (soundType === "heaterKit") {
      setSoundType("smoothSound");
      setSounds(soundGroups.smoothSound);
      // console.log("soundGroups.smoothSound", soundGroups.smoothSound);
    } else {
      setSoundType("heaterKit");
      setSounds(soundGroups.heaterKit);
      // console.log("soundGroups.heaterGroup", soundGroups.heaterKit);
    }
  };

  //console.log("title ////", typeOfSound[soundType]);
  return (
    <div id="drum-machine">
      <div id="container">
        <KeyPads playSound={playSound} sounds={sounds} />
        <SecondSoundGroup
          title={soundTitle || typeOfSound[soundType]}
          switchSoundPlay={switchSoundPlay}
        />

        <div className="control">
          <div className="logo">
            <h2>FCC</h2>
            <FaFreeCodeCamp />
          </div>
          <div className="power-controller">
            <p>Prower</p>
            <div className="select">
              <div className="inner" style={{ float: "right" }}></div>
            </div>
          </div>
          <div id="display"></div>
          <div className="volume-bar">
            <input max="2" min="0" step="0.01" type="range" />
          </div>
          <div className="power-controller">
            <p>Bank</p>
            <div className="select">
              <div className="inner" style={{ float: "left" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
