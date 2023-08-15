import "./PowerButton.css";
export const PowerButton = ({ power, handleDisabled, label }) => {
  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name={label}
          id={label}
          checked={power}
          onChange={handleDisabled}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};
