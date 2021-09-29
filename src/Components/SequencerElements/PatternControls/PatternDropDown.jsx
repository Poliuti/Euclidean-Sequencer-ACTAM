import { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import EuclideanLine from "../../../EuclideanLine";
import bjorklund from "../../../Functions/bjorklund";

const PatternDropDown = ({id, patternNames, defaultPatterns, linesList, setLinesList}) => {
    const [chosenPattern, setChosenPattern] = useState(null);
    let chosenPatternName;
    if (chosenPattern === null) {
      chosenPatternName = null;
    } else {
      chosenPatternName = chosenPattern.name;
    }

    const handleChange = (patternName, patternInd) => {
        defaultPatterns.forEach(pattern => {
      if (pattern.name === patternName) {
        setChosenPattern(pattern);

/*         let tempList = [...linesList];
        const {
          numSteps,
          numPulses,
          numRotations
        } = tempList;

        tempList[patternInd] =
          new EuclideanLine(numSteps, numPulses, numRotations, "").setID(patternInd);

        console.log("IN HANDLE CHANGE: ");
        console.log(tempList); */
        /* setLinesList(tempList); */
      }

    })
  }

  useEffect(() => {
    if (chosenPattern)
    {let tempList = [...linesList];
    tempList[id] = 
    {
      numSteps: chosenPattern.numSteps,
      numPulses: chosenPattern.numPulses,
      numRotations: chosenPattern.numRotations,
      euclideanArray: bjorklund(chosenPattern.numSteps, chosenPattern.numPulses, chosenPattern.numRotations),
      id: id,
    };
    setLinesList(tempList);
    
}
    

        /* tempList[id] =
          new EuclideanLine(numSteps, numPulses, numRotations, "").setID(id); */
          
  }, [chosenPattern])



    return ( <div className="drop-down-cont">
        <Dropdown options={patternNames}
          onChange={(e) => handleChange(e.label, id)}
          value={chosenPatternName}
          placeholder="Select a Euclidean Pattern"
          />
    </div> );
}
 
export default PatternDropDown;