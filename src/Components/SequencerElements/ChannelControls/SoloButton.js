const SoloButton = ({ channel }) => {

  const handleSolo = (classList, channel) => {
    if (channel.solo === false) {
      
      channel.solo = true;
      
      
      classList.remove("inactive");
      classList.add("active")
      
   
    } else {
      
      channel.solo = false;
      
      classList.remove("active");
      classList.add("inactive")
      

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
