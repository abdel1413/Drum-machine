import React from "react";
import { KeyPress } from "./KeyPress";

//NOTE: we create that child component so we can use
//useEffect hook to add event listener.

//component that call its child component keypress to
//produce a sound on click with method playSound passed as prop.

// The cild comp KeyPads takes its prop PlaySound and
// passed it to its child comp keyPress.

export const KeyPads = ({ playSound, sounds }) => {
  return (
    <div id="pad-container">
      {sounds.map((sound) => (
        <KeyPress playSound={playSound} snd={sound} />
      ))}
    </div>
  );
};

//RETURN BUTTON WITHOUT KEYPRESS EFFECT
// export const KeyPads = ({ playSound }) =>
// {
//   return (
//     <div id="pad-container">
//       {SoundData.map((sound) => (
//           <button className='drum-pad' id={sound.id} key={sound.key}>
//               <audio className="clip" src={sound.src} onClick={ playSound}/>
//               {sound.key}
//         </button>
//       ))}
//     </div>
//   );
// };
