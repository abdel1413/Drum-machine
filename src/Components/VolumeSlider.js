import "../App.css";
export const VolumeSlider = ({ volume, handleVolume }) => {
  return (
    <div className="">
      <input
        className="volume-bar"
        value={volume}
        max="1"
        min="0"
        step="0.01"
        type="range"
        volume={volume}
        onChange={handleVolume}
      />
    </div>
  );
};
