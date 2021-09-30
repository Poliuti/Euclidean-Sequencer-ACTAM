import { activeColor, nonActiveColor } from "./../../../Default/colori";

const Dot = ({ isActive, cellIdx, radius, angle, lineIndex }) => {
  angle = angle - 90;
  let color;
  isActive ? (color = activeColor[lineIndex]) : (color = nonActiveColor);

  const dotClassName = `dot`;

  const dotId = `${lineIndex}${cellIdx}`;

  /* const handleClick = (elem) => {

    let actualColor = elem.style.backgroundColor;
   

    if (actualColor === activeColor[lineIndex]) {
      elem.style.backgroundColor = tempNonActiveColor[lineIndex];
      elem.classList.add("tempInactive");
    } else if (actualColor === tempNonActiveColor[lineIndex]) {
      elem.style.backgroundColor = activeColor[lineIndex];
      elem.classList.remove("tempInactive");
    }
  }; */

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
