export const KeyPressWithNosound = ({ sound }) => {
  return (
    <button className="drum-pad" id={sound.id}>
      {sound.key}
    </button>
  );
};
