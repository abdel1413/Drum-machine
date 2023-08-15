import "./SwitchSoundButton.css";
export const SwitchSoundButton = ({ isChecked, switchSoundPlay, label }) => {
  return (
    <div className="container">
      {label}
      <div className="switcher">
        <input
          type="checkbox"
          className="checkbox"
          name={label}
          id={label}
          checked={isChecked}
          onChange={switchSoundPlay}
        />
        <label className="label-element" htmlFor={label}>
          <span className="inner-element" />
          <span className="slider-element" />
        </label>
      </div>
    </div>
  );
};
