import {
  Sequence,
  Transport
} from "tone";






const creaSequenceList = ( // funzione che crea le vere e proprie sequenze (Tone.js), ritorna la lista aggiornata
  euclideanPatternsList,
  noteArray,
  noteSpeedArray,
  instrumentList,
  initialPositionArray,
  channelList
  


) => {


  
  let sequencesList = [];

  let currentPosArr = initialPositionArray; //This array keeps track of the positions of the tick in the various sequences, initially all the ticks are at 0th position


  euclideanPatternsList.forEach((euclideanPattern, index) => {  // creating a Sequence Obj for each pattern and pushing it into sequencesList
    
    let channel = channelList[index];
    

    sequencesList.push(
      new Sequence(
        (time, event) => { // callback function called for each event in the sequence, every sequence division time

        currentPosArr[index] %= euclideanPattern.length;

        

          let BooleanSoloArray = channelList.map((channel) => //there are problems in the solo/mute functionalities, but we think it's a problem from Tone.js side, so we solved the problem in this way, even if it's not elegant
            channel.solo
          )

          if (BooleanSoloArray.includes(true)) {
            

            if (channel.mute === false && channel.solo === true) {

              if (event === 1 && Transport.state === "started") { // if the event from the euclideanPattern is 1, we trigger the instrument

                
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

          if (dot)
          {let dotColor = dot.style.backgroundColor; 
            let dotRadius = dot.style.width;


          if (Transport.state === "started") {
            dot.style.backgroundColor = "white"; // I paint the current Dot of white 
            dot.style.height= "20px";
            dot.style.width= "20px";

            Transport.scheduleOnce(() => { // after 0.006 sec I paint it of its previous color
              dot.style.backgroundColor = dotColor;
              dot.style.height= dotRadius;
            dot.style.width= dotRadius;
            }, "+0.006");
            
            currentPosArr[index]++;}

          } else {
            currentPosArr = initialPositionArray;
          }





        },
        euclideanPattern, // events that the sequence iterate on
        noteSpeedArray[index] // Sequence division
      )
    );


  });


  return sequencesList






};
export default creaSequenceList
