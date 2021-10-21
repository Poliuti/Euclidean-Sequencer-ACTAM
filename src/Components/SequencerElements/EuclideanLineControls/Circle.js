import Dot from "./Dot";

const Circle = ({ unitIndex, euclideanPattern }) => {
  
  const angle = 360 / euclideanPattern.length;

  const anglesArray = [];
  euclideanPattern.forEach((_, idx) => {
    anglesArray.push(angle * idx);
  });

  let radius = 100;

  return (
    <div className="circle-container">
      {euclideanPattern.map((cell, cellIndex) => (
        <div key={cellIndex}>
          <Dot
            isActive={cell}
            cellIdx={cellIndex}
            radius={radius}
            angle={anglesArray[cellIndex]}
            unitIndex={unitIndex}
          />
        </div>
      ))}
    </div>
  );
};

export default Circle;
