
import initializePatternArray from "../../../Functions/initializePatternArray";
import { Transport } from "tone";
import removeClass from "../../../Functions/removeClass";
import Dropdown from "react-dropdown";
import "./../../../../node_modules/react-dropdown/style.css"


const DropDownMenu = ({
  defaultEnvInfo,
  setSelectedPattern,
  patternName,
  setPatternName,
}) => {
  const handleOnChange = (string, linesList) => {
    Transport.stop();

    let chosenPattern;

    linesList.forEach((line, idx) => {
      if (line.name === string) {
        chosenPattern = line;
        let chosenPatternExt = initializePatternArray(chosenPattern, 4);
        setSelectedPattern(chosenPatternExt);
        removeClass("tempInactive", "dot");
        setPatternName(string);
      }
    });

    Transport.start("+0.1");
  };

  let dropDownOptions = defaultEnvInfo.map((line) => {
    let name;
    if (line.name !== undefined) {
      name = line.name;
    } else return "noNameForNow";
    return name;
  });

  return (
    <div className="dropDown">
      <h2>Chosen Pattern : {patternName}</h2>
      

      
      <Dropdown
        options={dropDownOptions}
        onChange={(e) => handleOnChange(e.label, defaultEnvInfo)}
        value={dropDownOptions[0]}
        placeholder="Select a Euclidean Pattern"
      />
    </div>
  );
};

export default DropDownMenu;
