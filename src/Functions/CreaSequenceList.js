import {
  Sequence,
  Transport
} from "tone";




const creaSequenceList = ( // funzione che crea le vere e proprie sequenze (Tone.js), ritorna la lista aggiornata e la lista del tick position
  patternList,
  initialList,
  noteArray,
  noteSpeedArray,
  instrumentList,
  initialPositionArray,
  channelList


) => {




  let currentPosArr = initialPositionArray;


  patternList.map((line, index) => {
    let channel = channelList[index];

    initialList.push(
      new Sequence(
        (time, event) => {




          currentPosArr[index] %= line.length;

          let BooleanSoloArray = channelList.map((channel) =>
            channel.solo
          )
          if (BooleanSoloArray.includes(true)) {
            

            if (channel.mute === false && channel.solo === true) {

              if (event === 1 && Transport.state === "started") {

                instrumentList[index].triggerAttackRelease(
                  noteArray[index],
                  "8n",
                  time
                );


              }
            }

          } else {
            
            if (channel.mute === false) {
              
              if (event === 1 && Transport.state === "started") {

                instrumentList[index].triggerAttackRelease(
                  noteArray[index],
                  "8n",
                  time
                );


              }
            }

          }





         

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






};
export default creaSequenceList
