import { useContext, useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import { Transport } from "tone";
import { EnvironmentContext } from "../../../Contexts/EnvironmentContext";
import EuclideanLine from "../../../EuclideanLine";
import { useIsMount } from "../../../Functions/useIsMount";


const PatternDropDown = ({
  id,
  patternNames,
  defaultPatterns,
  linesList,
  setLinesList,
}) => {
  const { setCurrentTransportState } = useContext(EnvironmentContext);

  const [chosenPattern, setChosenPattern] = useState(null);

  const isMount = useIsMount();

  let chosenPatternName;
  if (chosenPattern) {
    chosenPatternName =
      chosenPattern.name +
      `   (${chosenPattern.numSteps}, ${chosenPattern.numPulses}, ${chosenPattern.numRotations})`;
  } else {
    chosenPatternName = "Select a Euclidean Pattern";
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

  useEffect(() => {
    if (!isMount) {
      let traditionalPattern = defaultPatterns.find(
        (lineObj) =>
          JSON.stringify(lineObj.euclideanArray) ===
          JSON.stringify(linesList[id].euclideanArray)
      );

      setChosenPattern(traditionalPattern);
    }
  }, [linesList[id]]);

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
