import React, { useContext } from "react";
import CircleLine from "./CircleLine";


const CircleContainer = ({ lineIndex, tempo, setTempo, pattern }) => {
 
  

  return (
    <div className="circle-container">
      <CircleLine
        lineIndex={lineIndex}
        patternArray={pattern}
        tempo={tempo}
        setTempo={setTempo}
      />

    </div>
  );
};

export default CircleContainer;
