import { useState } from "react";

const SoloButton = ({ channel }) => {
  const [soloState, setSoloState] = useState("Solo");

  const handleSolo = (stringa, channel) => {
    if (stringa === "Solo") {
      channel.solo = true;
      setSoloState("Unsolo");
    } else {
      channel.solo = false;
      setSoloState("Solo");
    }
  };

  return (
    <div className="solo-div">
      <button
        onClick={(e) => handleSolo(e.currentTarget.innerText, channel)}
        className="solo-button"
      >
        {soloState}
      </button>
    </div>
  );
};
export default SoloButton;
