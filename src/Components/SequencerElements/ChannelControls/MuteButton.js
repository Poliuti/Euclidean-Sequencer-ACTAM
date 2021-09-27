import { Transport } from "tone";

const MuteButton = ({ channel }) => {
  
  

  const handleMute = (classList) => {
    if (classList.contains("inactive")) {
      classList.remove("inactive");
      classList.add("active")
      Transport.pause();
      channel.mute = true;

   
    } else {
      classList.remove("active");
      classList.add("inactive")
      Transport.pause();
      channel.mute = false;

    }
    Transport.start();
  };

  return (
    <div className="mute-div">
      <button
        onClick={(e) => handleMute(e.currentTarget.classList)}
        className="mute-button inactive"
      >
      </button>
    </div>
  );
};

export default MuteButton;
