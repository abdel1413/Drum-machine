import "./App.css";
import "@fontsource/russo-one";

import { FaFreeCodeCamp } from "react-icons/fa";
import { KeyPads } from "./Components/KeyPads";
import { useRef, useState } from "react";
import { SecondSoundGroup } from "./Components/SecondSoundGroup";
import SoundData from "./Components/SoundData";
import SoundData2 from "./Components/SoundData2";
import { Logo } from "./Components/Logo";

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
  const [power, setPower] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  //const isActive = useRef(true);

  const playSound = (key, snd) => {
    setSoundTitle(snd);
    const audio = document.getElementById(key);

    if (audio) {
      audio.play();
    } else {
      return;
    }
    // audio.src !== null && audio.play();
  };

  // const handleDisabled = (e) => {
  //   if (e.target.checked) {
  //     setDisabled(!isDisabled);
  //   } else {
  //     setDisabled(false);
  //   }
  // };
  //method to switch sound voice when clicked on
  //passed as props to second group.
  const switchSoundPlay = () => {
    setSoundTitle("");
    if (soundType === "heaterKit") {
      setIsChecked(!isChecked);
      setSoundType("smoothSound");
      setSounds(soundGroups.smoothSound);
    } else {
      setIsChecked(false);
      setSoundType("heaterKit");
      setSounds(soundGroups.heaterKit);
      // setSoundTitle(soundGroups.heaterKit.id);
    }
  };

  const handleVolume = (e) => {
    setVolume(e.target.value);
  };
  console.log("voluem", volume);
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

  //create power on/off method
  //and pass it in return div so that whenever there a rerender,
  //it's called
  const switchPower = () => {
    setPower(!power);
    setVolume(!volume);
    console.log("p", power);

    let controls = document.getElementsByClassName("second-column")[0];

    power === true
      ? controls.classList.add("controls")
      : controls.classList.remove("controls");
  };

  return (
    <div id="drum-machine">
      <Logo />
      {setKeyVolume()}
      <div id="container">
        <KeyPads playSound={playSound} sounds={sounds} power={power} />
        <SecondSoundGroup
          isChecked={isChecked}
          switchPower={switchPower}
          power={power}
          volume={volume}
          handleVolume={handleVolume}
          title={soundTitle || typeOfSound[soundType]}
          switchSoundPlay={switchSoundPlay}
        />
      </div>
    </div>
  );
}

export default App;
