import PatternControls from "./PatternControls";
import OtherControls from "./OtherControls";
import { useState } from "react";
import PatternDropDown from "./PatternDropDown";
import initPatternNames from "../../../Functions/initPatternNames";
import Circle from "./Circle";

const PatternControlsList = ({
  linesList,
  setLinesList,
  envDefaultLinesList,
  setTempo,
  tempo,
  channelList,
  colors,
  euclideanPatternsList,
  envDefaultPatterns,
}) => {
  
  
  const elementoBase = {
    height: "24rem",
  };

  const [patternNames, setPatternNames] = useState( //adding numSteps, numPulses, numRotations to the pattern name
    initPatternNames(envDefaultPatterns)
  );

  

  return (
    <div className="pattern-controls-list">
      {linesList.map((line, id) => {
        const color = colors[id];

        return (
          <div key={id} className="elemento-base" style={elementoBase}>
          
            <Circle
              lineIndex={id}
              euclideanPattern ={euclideanPatternsList[id]}
            />

            <PatternControls
              setTempo={setTempo}
              tempo={tempo}
              idx={id}
              line={line}
              setLinesList={setLinesList}
              linesList={linesList}
              envDefaultLinesList={envDefaultLinesList}
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
              defaultPatterns={envDefaultPatterns}
              linesList={linesList}
              setLinesList={setLinesList}
              euclideanPatternsList={euclideanPatternsList}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PatternControlsList;
