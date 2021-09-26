import {
    Sequence,
    Transport
  } from "tone";

  import {
    activeColor,
    currentColor
  } from "./../Default/colori";

  const creaSequenceListModeTwo = (selectedPatternExt, initialList, instrumentList, noteArray, initialPositionArray, noteSpeedArray, currentPos) => {
 
    const numLines = selectedPatternExt.length;
    selectedPatternExt.map((line, index) => {

        initialList.push(
          new Sequence(
            (time, event) => {
  
  
              currentPos %= line.length;
             
  
              let dot = document.getElementById(`${index}${currentPos}`);
  
  
              let dotColor = dot.style.backgroundColor;
  
              if (event === 1 && Transport.state === "started" && dotColor === activeColor[index]) {
  
                instrumentList[index].triggerAttackRelease(
                  noteArray[index],
                  "8n",
                  time
                );
  
  
  
  
              }
  
  
  
  
  
  
              if (Transport.state === "started") {
                dot.style.backgroundColor = currentColor;
  
  
                Transport.scheduleOnce(() => {
                  dot.style.backgroundColor = dotColor;
                }, "+0.005");
  
                if (index === (numLines - 1)) {
                  currentPos++
                }
  
              } else {
                currentPos = 0/* initialPosArray[0] */;
              }
  
  
  
  
  
            },
            line,
            noteSpeedArray[index]
          )
        );
  
  
      });
    return initialList
}

export default creaSequenceListModeTwo;