export const KeyPressWithNosound = ({ snd }) => {
  return (
    <button className="drum-pad" id={snd.id}>
      {snd.key}
    </button>
  );
};
