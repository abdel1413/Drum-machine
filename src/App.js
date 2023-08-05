import "./App.css";
import {
  FaBatteryHalf,
  FaFreeCodeCamp,
  FaPowerOff,
  FaSuperpowers,
  FaVolumeDown,
} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          <button className="drum-pad" id="Heater-1">
            <audio
              controls
              className="clip"
              id="Q"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            ></audio>
            Q
          </button>
          <button className="drum-pad" id="Heater-2">
            W
            <audio
              controls
              className="clip"
              id="W"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            ></audio>{" "}
          </button>
          <button className="drum-pad" id="Heater-3">
            E
            <audio
              controls
              className="clip"
              id="E"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            ></audio>
          </button>
          <button className="drum-pad" id="Heater-4_1">
            A
            <audio
              controls
              className="clip"
              id="A"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            ></audio>{" "}
          </button>
          <button className="drum-pad" id="Heater-6">
            S
            <audio
              controls
              className="clip"
              id="S"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            ></audio>
          </button>
          <button className="drum-pad" id="Dsc_Oh">
            D
            <audio
              controls
              className="clip"
              id="D"
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            ></audio>
          </button>
          <button className="drum-pad" id="Kick_n_Hat">
            Z
            <audio
              controls
              className="clip"
              id="Z"
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            ></audio>
          </button>
          <button className="drum-pad" id="RP4_KICK_1">
            X
            <audio
              controls
              className="clip"
              id="X"
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            ></audio>
          </button>
          <button className="drum-pad" id="Cev_H2">
            C{" "}
            <audio
              controls
              className="clip"
              id="C"
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            ></audio>{" "}
          </button>

          <div className="display-element"></div>
          <div>
            <div>
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
    </div>
  );
}

export default App;
