const MuteButton = ({ channel }) => {
  

  const handleMute = (classList, channel) => {
    if (classList.contains("inactive")) {
      classList.remove("inactive");
      classList.add("active")
      channel.mute = true;
   
    } else {
      classList.remove("active");
      classList.add("inactive")
      channel.mute = false;

    }
  };

  return (
    <div className="mute-div">
      <button
        onClick={(e) => handleMute(e.currentTarget.classList, channel)}
        className="mute-button inactive"
      >
      </button>
    </div>
  );
};

export default MuteButton;
