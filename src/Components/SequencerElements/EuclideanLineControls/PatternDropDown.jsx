import { useContext, useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import { Transport } from "tone";
import { EnvironmentContext } from "../../../Contexts/EnvironmentContext";
import EuclideanUnit from "../../../EuclideanUnit";
import { useIsMount } from "../../../Functions/useIsMount";


const PatternDropDown = ({
  id,
  patternNames,
  defaultUnits,
  unitList,
  setUnitList,
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

    defaultUnits.forEach((unit) => {
      if (unit.name === modifPatternName) {
        setChosenPattern(unit);
      }
    });
  };

  useEffect(() => {
    if (chosenPattern) {
      let tempList = [...unitList];
      tempList[id] = new EuclideanUnit(
        chosenPattern.numSteps,
        chosenPattern.numPulses,
        chosenPattern.numRotations,
        chosenPatternName
      ).setID(id);
      setUnitList(tempList);
    }
  }, [chosenPattern]);

  useEffect(() => {
    if (!isMount) {
      let traditionalPattern = defaultUnits.find(
        (unitObj) =>
          JSON.stringify(unitObj.euclideanArray) ===
          JSON.stringify(unitList[id].euclideanArray)
      );

      setChosenPattern(traditionalPattern);
    }
  }, [unitList[id]]);

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
