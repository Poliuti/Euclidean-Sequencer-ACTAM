const SoloButton = ({ channel }) => {

  const handleSolo = (classList, channel) => {
    if (classList.contains("inactive")) {
      classList.remove("inactive");
      classList.add("active")
      channel.solo = true;
   
    } else {
      classList.remove("active");
      classList.add("inactive")
      channel.solo = false;

    }
  };

  return (
    <div className="solo-div">
      <button
        onClick={(e) => handleSolo(e.currentTarget.classList, channel)}
        className="solo-button inactive"
      >
  
      </button>
    </div>
  );
};
export default SoloButton;
