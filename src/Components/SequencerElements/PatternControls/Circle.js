import Dot from "./Dot";

const Circle = ({ lineIndex, euclideanPattern }) => {
  const angle = 360 / euclideanPattern.length;

  const anglesArray = [];
  euclideanPattern.map((_, idx) => {
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
            lineIndex={lineIndex}
          />
        </div>
      ))}
    </div>
  );
};

export default Circle;
