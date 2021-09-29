import PatternControls from "./PatternControls";
import CircleContainer from "./CircleContainer";
import OtherControls from "./OtherControls";
import { useEffect, useState } from "react";
import PatternDropDown from "./PatternDropDown";

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
    height: "22.5rem",
  };

  const [patternNames, setPatternNames] = useState(
    envDefaultPatterns.map((pattern) => {
      let patternName =
        pattern.name +
        "    " +
        `(${pattern.numSteps}, ${pattern.numPulses}, ${pattern.numRotations})`;
      return patternName;
    })
  );

  useEffect(() => {
    setPatternNames(
      envDefaultPatterns.map((pattern) => {
        let patternName =
          pattern.name +
          "    " +
          `(${pattern.numSteps}, ${pattern.numPulses}, ${pattern.numRotations})`;
        return patternName;
      })
    );
  }, [envDefaultPatterns]);

  return (
    <div className="pattern-controls-list">
      {linesList.map((line, id) => {
        const color = colors[id];

        return (
          <div key={id} className="elemento-base" style={elementoBase}>
            <CircleContainer
              lineIndex={id}
              tempo={tempo}
              setTempo={setTempo}
              pattern={patternArrayList[id]}
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
