import { useContext } from "react";
import Dropdown from "react-dropdown";
import { Transport } from "tone";
import { EnvironmentContext } from "../../Contexts/EnvironmentContext";

const LoadDropDown = ({ userPresets, setUnitList, setTempo }) => {
  const { setCurrentTransportState } = useContext(EnvironmentContext);

  let savedListNames;

  if (userPresets) {
    savedListNames = userPresets.map((_, id) => `User Patterns ${id}`);
  } else savedListNames = ["Failed"];

  const handleOnChange = (label) => {
    setUnitList(userPresets[label.slice(label.length - 1)].unitList);
    setTempo(userPresets[label.slice(label.length - 1)].tempo);

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
    value = "Select a User Pattern";
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
