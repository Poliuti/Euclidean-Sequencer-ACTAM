import PatternControls from "./PatternControls";
import OtherControls from "./OtherControls";
import { useState } from "react";
import PatternDropDown from "./PatternDropDown";
import initPatternNames from "../../../Functions/initPatternNames";
import Circle from "./Circle";

const EuclideanLinesControls = ({
  unitList,
  setUnitList,
  setTempo,
  tempo,
  channelList,
  colors,
  euclideanPatternsList,
  envDefaultUnits,
}) => {
  



  const [patternNames, setPatternNames] = useState( //adding numSteps, numPulses, numRotations to the pattern name
    initPatternNames(envDefaultUnits)
  );

  

  return (
    <div className="euclideanline-control-list">
      {unitList.map((unit, id) => {
        const color = colors[id];

        return (
          <div key={id} className="elemento-base" >
          
            <Circle
              unitIndex={id}
              euclideanPattern ={euclideanPatternsList[id]}
            />

            <PatternControls
              setTempo={setTempo}
              tempo={tempo}
              idx={id}
              unit={unit}
              setUnitList={setUnitList}
              unitList={unitList}
              
              color={color}
            />

            <OtherControls
              channel={channelList[id]}
              tempo={tempo}
              setTempo={setTempo}
              index={id}
              color={color}
            />

            <PatternDropDown
              id={id}
              patternNames={patternNames}
              defaultUnits={envDefaultUnits}
              unitList={unitList}
              setUnitList={setUnitList}
              euclideanPatternsList={euclideanPatternsList}
            />
          </div>
        );
      })}
    </div>
  );
};

export default EuclideanLinesControls;
