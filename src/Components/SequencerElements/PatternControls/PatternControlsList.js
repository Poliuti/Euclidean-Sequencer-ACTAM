import PatternControls from "./PatternControls";
import OtherControls from "./OtherControls";
import { useEffect, useState } from "react";
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
  patternArrayList,
  envDefaultPatterns,
}) => {
  
  const elementoBase = {
    height: "24rem",
  };

  const [patternNames, setPatternNames] = useState(
    initPatternNames(envDefaultPatterns)
  );

  useEffect(() => {
    setPatternNames(
      initPatternNames(envDefaultPatterns)
    );
  }, [envDefaultPatterns]);

  return (
    <div className="pattern-controls-list">
      {linesList.map((line, id) => {
        const color = colors[id];

        return (
          <div key={id} className="elemento-base" style={elementoBase}>
          
            <Circle
              lineIndex={id}
              euclideanPattern ={patternArrayList[id]}
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
            />
          </div>
        );
      })}
    </div>
  );
};

export default PatternControlsList;
