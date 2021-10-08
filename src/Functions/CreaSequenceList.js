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
  channelList,
  


) => {




  let currentPosArr = initialPositionArray;


  patternList.forEach((euclideanPattern, index) => {
    
    let channel = channelList[index];

    initialList.push(
      new Sequence(
        (time, event) => {

        
         

          currentPosArr[index] %= euclideanPattern.length;

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





         

          let dot = document.getElementById(`${index}${currentPosArr[index]}`); // I grab the current Dot of the index-th Circle from the DOM


          let dotColor = dot.style.backgroundColor; 


          if (Transport.state === "started") {
            dot.style.backgroundColor = "white"; // I paint the current Dot of white 

            Transport.scheduleOnce(() => { // after 0.008 sec I paint it to its previous color
              dot.style.backgroundColor = dotColor;
            }, "+0.008");
            currentPosArr[index]++;

          } else {
            currentPosArr = initialPositionArray;
          }





        },
        euclideanPattern, // events that the sequence iterate on
        noteSpeedArray[index] // Sequence division
      )
    );


  });


  return initialList






};
export default creaSequenceList
