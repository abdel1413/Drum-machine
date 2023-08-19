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
  let isActive = useRef(null);

  //const isActive = useRef(true);

  const playSound = (key, sound) => {
    setSoundTitle(sound);

    const audio = document.getElementById(key);
    if (audio) {
      stylePad(audio);
      // removeStyle(audio);
      audio.play();
    } else {
      console.log("aud", audio);
      return;
    }
    // audio.src !== null && audio.play();
  };

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

  //create power on/off method
  //and pass it in return div so that whenever there a rerender,
  //it's called
  const refButton = (p) => {
    if (p) {
      isActive.current.style.backgroundColor = "#4E51DF";
      isActive.current.style.color = "white";
      isActive.current.style.borderRadius = "10px";
      isActive.current.style.transition = `all 0.3s easy-in-out 0s`;
    } else {
      isActive.current.style = "initial";
    }
  };

  const stylePad = (pad) => {
    //console.log("pad", (pad.parentNode.style.backgroundColor = "green"));

    pad.parentNode.style.backgroundColor = "#f2a443";

    setTimeout(() => {
      pad.parentNode.style.backgroundColor = "#808080";
    }, 200);
  };

  const removeStyle = (pad) => {
    setTimeout(() => {
      pad.parentNode.style.backgroundColor = "#808080";
    }, 200);
  };
  const switchPower = () => {
    setPower(!power);
    setVolume(!volume);

    let controls = document.getElementsByClassName("second-column")[0];

    power
      ? controls.classList.add("controls")
      : controls.classList.remove("controls");

    refButton(power);
  };

  return (
    <div id="drum-machine">
      <Logo />
      {setKeyVolume()}
      <div id="container">
        <KeyPads
          title={soundTitle || typeOfSound[soundType]}
          playSound={playSound}
          sounds={sounds}
          power={power}
        />
        <SecondSoundGroup
          isActive={isActive}
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
