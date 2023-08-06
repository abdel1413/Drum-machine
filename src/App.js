import "./App.css";
import { FaFreeCodeCamp } from "react-icons/fa";
import { KeyPads } from "./Components/KeyPads";

function App() {
  const playSound = (key) => {
    const audio = document.getElementById(key);
    console.log("sound played", audio);
    audio.currentTime = 0;
    audio.play();
  };
  return (
    <div id="drum-machine">
      <div id="display">
        <KeyPads playSound={playSound} />

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
          <div className="display-result"></div>
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
