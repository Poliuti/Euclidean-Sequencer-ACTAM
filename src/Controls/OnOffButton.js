const OnOffButton = ({isActive, setIsActive}) => {



    const onOffSwitch = (e) => {
        if (e.target.value === "on") {
            setIsActive("Off");
            e.target.value = "off";
            
        } else {
            setIsActive("On");
            e.target.value = "on";
            
        }
        
    }

    return ( <button className="on-off" value="on" onClick={(e) => onOffSwitch(e)} >
        {isActive}
    </button> );
}
 
export default OnOffButton;