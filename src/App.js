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
  const [volume, setVolume] = useState(1);
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
    } else {
      setSoundType("heaterKit");
      setSounds(soundGroups.heaterKit);
    }
  };

  const handleVolume = (e) => {
    setVolume(e.target.value);
  };

  //create a methd to connect the input volume to
  //audi so we can manipulate the volume.
  //to do this, get the sounds'key and loop thru the result
  // then set the audio.volume to volume hook
  const setKeyVolume = () => {
    const audios = sounds.map((sound) => document.getElementById(sound.key));

    audios.forEach((audio) => {
      if (audio) {
        audio.volume = volume;
      }
    });
  };

  return (
    <div id="drum-machine">
      {setKeyVolume()}
      <div id="container">
        <KeyPads playSound={playSound} sounds={sounds} />
        <SecondSoundGroup
          volume={volume}
          handleVolume={handleVolume}
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
