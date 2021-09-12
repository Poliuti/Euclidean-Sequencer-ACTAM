import { useState } from "react";


const MuteButton = ({ channel }) => {
  const [muteState, setMuteState] = useState("Mute");

  const handleMute = (stringa, channel) => {
    if (stringa === "Mute") {
      channel.mute = true;
      setMuteState("UnMute");
    } else {
      channel.mute = false;
      setMuteState("Mute");
    }
  };

  return (
    <div className="mute-div">
      <button
        onClick={(e) => handleMute(e.currentTarget.innerText, channel)}
        className="mute-button"
      >
        {muteState}
      </button>
    </div>
  );
};

export default MuteButton;
