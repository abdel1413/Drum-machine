import React from "react";
import { KeyPress } from "./KeyPress";
import { KeyPressWithNosound } from "./KeyPressWithNoSound";

//NOTE: we create that child component so we can use
//useEffect hook to add event listener.

//component that call its child component keypress to
//produce a sound on click with method playSound passed as prop.

// The cild comp KeyPads takes its prop PlaySound and
// passed it to its child comp keyPress.
export const KeyPads = ({ power, playSound, sounds }) => {
  //console.log("sounds", sounds);
  //console.log(power);
  //!power && sounds.map((sound) => console.log({ ...sound, src: null }));

  let padWithSound = sounds.map((sound) => (
    <KeyPress playSound={playSound} snd={sound} />
  ));
  let padWithNoSound = sounds.map((sound) => (
    <KeyPressWithNosound snd={{ ...sound, src: null }} />
  ));

  return <div id="pad-container">{power ? padWithSound : padWithNoSound}</div>;
  // return (
  //   <div id="pad-container">
  //     {power
  //       ? sounds.map((sound) => {
  //           return <KeyPress playSound={playSound} snd={sound} />;
  //         })
  //       : sounds.map((sound) => {
  //           return (
  //             <KeyPress playSound={playSound} snd={{ ...sound, src: null }} />
  //           );
  //         })}
  //   </div>
  // );
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
