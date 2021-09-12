import Dot from "./Dot";



const CircleLine = ({
  lineIndex,
  patternArray
}) => {
  const angle = 360 / patternArray.length;

  const anglesArray = [];
  patternArray.map((cell, idx) => {
    anglesArray.push(angle * idx);
  });

  let radius = 55;

  console.log("pattern Array:  ");
  console.log(patternArray);

 



  return (
    
      <div className="circle-line">
        {patternArray.map((cell, cellIndex) => (
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

export default CircleLine;
