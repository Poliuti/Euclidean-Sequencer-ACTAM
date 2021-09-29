import { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import { Transport } from "tone";
import EuclideanLine from "../../../EuclideanLine";
import "./../../../../node_modules/react-dropdown/style.css"



const PatternDropDown = ({id, patternNames, defaultPatterns, linesList, setLinesList}) => {

    
    const [chosenPattern, setChosenPattern] = useState(null);
    let chosenPatternName;
    if (chosenPattern === null) {
      chosenPatternName = null;
    } else {
      chosenPatternName = chosenPattern.name + `   (${chosenPattern.numSteps}, ${chosenPattern.numPulses}, ${chosenPattern.numRotations})`;
    }

    const handleChange = (patternName) => {

        Transport.stop();
 
        const modifPatternName = patternName.slice(0, patternName.indexOf('(')).trimEnd();

        defaultPatterns.forEach((pattern) => {
          if (pattern.name === modifPatternName) {
            setChosenPattern(pattern);
          }
        });

        
    
  }

  useEffect(() => {
    if (chosenPattern)
    {let tempList = [...linesList];
    tempList[id] = new EuclideanLine(chosenPattern.numSteps, chosenPattern.numPulses, chosenPattern.numRotations, chosenPatternName).setID(id);;
    setLinesList(tempList);
    
}
}, [chosenPattern])



    return ( <div className="drop-down-cont" >
        <Dropdown options={patternNames}
          onChange={(e) => handleChange(e.label)}
          value={chosenPatternName}
          placeholder="Select a Euclidean Pattern"
          />
    </div> );
}
 
export default PatternDropDown;