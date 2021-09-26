import {
    Sequence,
    Transport
  } from "tone";

const creaSequenceListModeOne = (patternList, initialList, currentPosArr, instrumentList, noteArray, initialPositionArray, noteSpeedArray) => {
    patternList.map((line, index) => {

        initialList.push(
          new Sequence(
            (time, event) => {
  
  
              currentPosArr[index] %= line.length;
  
  
              if (event === 1 && Transport.state === "started") {
  
                instrumentList[index].triggerAttackRelease(
                  noteArray[index],
                  "8n",
                  time
                );
  
  
              }
  
  
  
  
  
  
  
  
              /*  */
  
              let dot = document.getElementById(`${index}${currentPosArr[index]}`);
  
  
              let dotColor = dot.style.backgroundColor;
  
  
              if (Transport.state === "started") {
                dot.style.backgroundColor = "white";
  
                Transport.scheduleOnce(() => {
                  dot.style.backgroundColor = dotColor;
                }, "+0.005");
                currentPosArr[index]++;
  
              } else {
                currentPosArr = initialPositionArray;
              }
  
  
  
  
  
            },
            line,
            noteSpeedArray[index]
          )
        );
  
  
      });

    return initialList
}

export default creaSequenceListModeOne;