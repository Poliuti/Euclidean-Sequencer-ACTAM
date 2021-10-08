import { useContext, useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import { Transport } from "tone";
import { EnvironmentContext } from "../../../Contexts/EnvironmentContext";
import EuclideanLine from "../../../EuclideanLine";

const PatternDropDown = ({
  id,
  patternNames,
  defaultPatterns,
  linesList,
  setLinesList,
}) => {
  const { setCurrentTransportState } = useContext(EnvironmentContext);

  const [chosenPattern, setChosenPattern] = useState(null);

  let chosenPatternName;
  if (chosenPattern === null) {
    chosenPatternName = null;
  } else {
    chosenPatternName =
      chosenPattern.name +
      `   (${chosenPattern.numSteps}, ${chosenPattern.numPulses}, ${chosenPattern.numRotations})`;
  }
  const handleChange = (patternName) => {
    if (Transport.state === "started") {
      setCurrentTransportState(1);
    } else {
      setCurrentTransportState(0);
    }

    const modifPatternName = patternName
      .slice(0, patternName.indexOf("("))
      .trimEnd();

    defaultPatterns.forEach((pattern) => {
      if (pattern.name === modifPatternName) {
        setChosenPattern(pattern);
      }
    });
  };

  useEffect(() => {
    if (chosenPattern) {
      let tempList = [...linesList];
      tempList[id] = new EuclideanLine(
        chosenPattern.numSteps,
        chosenPattern.numPulses,
        chosenPattern.numRotations,
        chosenPatternName
      ).setID(id);
      setLinesList(tempList);
    }
  }, [chosenPattern]);

  return (
    <div className="drop-down-cont">
      <Dropdown
        options={patternNames}
        onChange={(e) => handleChange(e.label)}
        value={chosenPatternName}
        placeholder="Select a Euclidean Pattern"
      />
    </div>
  );
};

export default PatternDropDown;
