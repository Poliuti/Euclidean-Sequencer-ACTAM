import Dot from "./Dot";
import * as Tone from "tone";
import ColorContextProvider, { ColorContext } from "./Contexts/ColorContext";
import { useEffect } from "react";
import { useState } from "react";

const CircleLine = ({
  lineIndex,
  euclideanArray,
  actualNoteArray,
  setActualNoteArray
}) => {
  const angle = 360 / euclideanArray.length;

  const anglesArray = [];
  euclideanArray.map((cell, idx) => {
    anglesArray.push(angle * idx);
  });

  let radius = 45;

  console.log("Euclidean Array:  ");
  console.log(euclideanArray);

  return (
    <ColorContextProvider>
      <div className="circle-line">
        {euclideanArray.map((cell, cellIndex) => (
          <div key={cellIndex}>
            <Dot
              isActive={cell}
              cellIdx={cellIndex}
              radius={radius}
              angle={anglesArray[cellIndex]}
              lineIndex={lineIndex}
              actualNoteArray={actualNoteArray}
              setActualNoteArray={setActualNoteArray}
            />
          </div>
        ))}
      </div>
    </ColorContextProvider>
  );
};

export default CircleLine;
