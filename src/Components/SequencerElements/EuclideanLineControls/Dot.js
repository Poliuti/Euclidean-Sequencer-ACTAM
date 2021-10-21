import { activeColor, nonActiveColor } from "../../../Default/colori";

const Dot = ({ isActive, cellIdx, radius, angle, unitIndex }) => {
  angle = angle - 90;
  let color;
  isActive ? (color = activeColor[unitIndex]) : (color = nonActiveColor);

  const dotClassName = `dot`;

  const dotId = `${unitIndex}${cellIdx}`;

 

  const active = {
    position: "absolute",
    height: "17px",
    width: "17px",
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
      className={dotClassName}
      id={dotId}
      
    ></div>
  );
};

export default Dot;
