import {
    Sequence,
    Transport
  } from "tone";

  import {
    activeColor,
    currentColor
  } from "./../Default/colori";

  const creaSequenceListModeTwo = (selectedPatternExt, initialList, instrumentList, noteArray, initialPositionArray, noteSpeedArray, currentPos, channelList) => {
 
    const numLines = selectedPatternExt.length;
    selectedPatternExt.map((line, index) => {
      let channel = channelList[index];
        initialList.push(
          new Sequence(
            (time, event) => {
  
  
              currentPos %= line.length;
             
  
              let dot = document.getElementById(`${index}${currentPos}`);
  
  
              let dotColor = dot.style.backgroundColor;
  

              let BooleanSoloArray = channelList.map((channel) => 
              channel.solo
            )
            if (BooleanSoloArray.includes(true)){

              if (channel.mute === false && channel.solo===true)
              {if (event === 1 && Transport.state === "started" && dotColor === activeColor[index]) {
  
                instrumentList[index].triggerAttackRelease(
                  noteArray[index],
                  "8n",
                  time
                );
  
  
              }}

            }
            else {
              if (channel.mute === false)
              {if (event === 1 && Transport.state === "started" && dotColor === activeColor[index]) {
  
                instrumentList[index].triggerAttackRelease(
                  noteArray[index],
                  "8n",
                  time
                );
  
  
              }}

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