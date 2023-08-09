import React from "react";

export const SecondSoundGroup = ({ title, switchSoundPlay }) => {
  console.log("title", title);
  return (
    <div>
      <h1 id="">title</h1>
      <h1>{title}</h1>
      <button onClick={switchSoundPlay}>Switch</button>;
    </div>
  );
};
