import { Sequence, Transport } from "tone";
import playersList from "./playersList";


const creaSequence = ( // funzione che crea le vere e proprie sequenze (Tone.js), ritorna la lista aggiornata e la lista del tick position
    chosenLine,
    noteSpeed,
    initialPosition,
    playersIndexArray
  
    
  ) => {

    

    
    console.log("creaSequence chiamata");
    let currentPos= initialPosition;





      let initialSequence = 
        new Sequence(
          (time, event) => {

           
            currentPos %= chosenLine.euclideanArray.length;
            console.log(currentPos);
            
            if (event === 1 && Transport.state === "started") {
                playersList[playersIndexArray[currentPos]].triggerAttackRelease(
                 "A3",
                "8n",
                time
              );
              console.log("suona in posizione " + currentPos);
              
            }
            
            
            
            
          
            
            
            
            /*  */

            let dot = document.getElementById(`0${currentPos}`);

            
            let dotColor = dot.style.backgroundColor;
            
            
            if (Transport.state === "started")
            {
              dot.style.backgroundColor = "white";

              Transport.scheduleOnce(() => {
                dot.style.backgroundColor = dotColor;
              }, "+0.005");
              currentPos++;

            }
            else {currentPos = initialPosition;}
            
            

            
             /*   console.log(`currentPosition of line ${index} :`);
            console.log(currentPos); */
          },
          chosenLine.euclideanArray,
          noteSpeed
        )
      ;
      

    ;

    return { initialSequence, currentPos};
  };

  export default creaSequence