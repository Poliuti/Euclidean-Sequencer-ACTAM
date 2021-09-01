import React, { useContext } from "react";
import CircleLine from "./CircleLine";

const CircleContainer = ({
  lineIndex,
  tempo,
  setTempo,
  context,
  sequenceList,
  actualNoteArray,
  setActualNoteArray,
}) => {
  const { euclideanArrayList } = useContext(context);
  const euclArray = euclideanArrayList[lineIndex];

  return (
    <div className="circle-container">
      <CircleLine
        lineIndex={lineIndex}
        euclideanArray={euclArray}
        tempo={tempo}
        setTempo={setTempo}
        sequenceList={sequenceList}
        actualNoteArray={actualNoteArray}
        setActualNoteArray={setActualNoteArray}
      />
    </div>
  );
};

export default CircleContainer;
