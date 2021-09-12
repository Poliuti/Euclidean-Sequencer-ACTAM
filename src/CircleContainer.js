import React, { useContext } from "react";
import CircleLine from "./CircleLine";
import { EnvironmentContext } from "./Contexts/EnvironmentContext";

const CircleContainer = ({ lineIndex, tempo, setTempo }) => {
  const { patternArrayList } = useContext(EnvironmentContext);
  const euclArray = patternArrayList[lineIndex];

  return (
    <div className="circle-container">
      <CircleLine
        lineIndex={lineIndex}
        patternArray={euclArray}
        tempo={tempo}
        setTempo={setTempo}
      />
    </div>
  );
};

export default CircleContainer;
