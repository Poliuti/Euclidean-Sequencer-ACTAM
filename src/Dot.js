import { useContext, useEffect } from "react";
import { ColorContext } from "./Contexts/ColorContext";
import noteNames from "./noteNames";


const Dot = ({ isActive, cellIdx, radius, angle, lineIndex, actualNoteArray, setActualNoteArray }) => {
  const { activeColor, nonActiveColor } =
    useContext(ColorContext);

  angle = angle - 90;
  let color;
  isActive ? (color = activeColor) : (color = nonActiveColor);

const dotClassName =  `${lineIndex}dot`;

  const dotId  = `${lineIndex}${cellIdx}`;

  console.log("Dot Id ");
  console.log(dotId);

  const handleClick = (ev) => {
    let temp = actualNoteArray;
    let indexx= Math.round(Math.random() * 100) % noteNames.length;
    temp[lineIndex] = noteNames[indexx];
    setActualNoteArray(temp);
  }

  const active = {
    position: "absolute",
    height: "10px",
    width: "10px",
    backgroundColor: color,
    borderRadius: "50%",
    left: "80%",
    top: "60%",
    margin: "-(25px/2)",
    transform: `rotate(${angle}deg) translate(${radius}px)`,
  };

  return (
    <div
      style={active}
      className= {dotClassName}
      id = {dotId}
      onClick = {(e) => handleClick()}
    ></div>
  );
};

export default Dot;
