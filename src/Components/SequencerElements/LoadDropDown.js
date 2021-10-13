import { useContext } from "react";
import Dropdown from "react-dropdown";
import { Transport } from "tone";
import { EnvironmentContext } from "../../Contexts/EnvironmentContext";

const LoadDropDown = ({ userList, setLinesList }) => {
  
  
  const {setCurrentTransportState} = useContext(EnvironmentContext);

    
  let savedListNames;

  if (userList) {
    savedListNames = userList.map((_, id) => `User Lines List ${id}`);
  } else savedListNames = ["Failed"];

  const handleOnChange = (label) => {
   
    setLinesList(userList[label.slice(label.length - 1)]);
    if (Transport.state === "started") {
        setCurrentTransportState(1);
   
      } else {
        setCurrentTransportState(0);
  
      }

  };


  


  let value;
  if (!savedListNames[0]) {
    value = null;
  } else {
    value =  "Select a User Pattern";
  }



  return (
    <div id="saved-dropdown">
      <Dropdown
        options={savedListNames}
        onChange={(e) => handleOnChange(e.label)}
        value={value}
        placeholder="Nothing Saved Yet"
      />
    </div>
  );
};

export default LoadDropDown;
