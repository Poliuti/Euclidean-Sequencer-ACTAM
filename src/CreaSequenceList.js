import { Sequence, Transport } from "tone";
import colora from "./Controls/colora";


const creaSequenceList = ( // funzione che crea le vere e proprie sequenze (Tone.js), ritorna la lista aggiornata e la lista del tick position
    linesLista,
    initialList,
    noteArray,
    noteSpeedArray,
    instrumentList,
    initialPositionArray
  
    
  ) => {

    

    
    console.log("creaSequenceList chiamata");
    let currentPosArr = initialPositionArray;


    /* linesLista.forEach((line, id) =>{
      colora(line.euclideanArray, id);
    }); */

    

   

    linesLista.map((line, index) => {

      initialList.push(
        new Sequence(
          (time, event) => {

           
            currentPosArr[index] %= linesLista[index].euclideanArray.length;
            console.log(currentPosArr);
            
            if (event === 1 && Transport.state === "started") {
                 
                 instrumentList[index].triggerAttackRelease(
                  noteArray[index],
                "8n",
                time
              );
              console.log("suona in posizione " + currentPosArr[index]);
              
            }
            
            
            
            
          
            
            
            
            /*  */

            let dot = document.getElementById(`${index}${currentPosArr[index]}`);

            
            let dotColor = dot.style.backgroundColor;
            
            
            if (Transport.state === "started")
            {
              dot.style.backgroundColor = "white";

              Transport.scheduleOnce(() => {
                dot.style.backgroundColor = dotColor;
              }, "+0.005");
              currentPosArr[index]++;

            }
            else {currentPosArr = initialPositionArray;}
            
            

            
             /*   console.log(`currentPosition of line ${index} :`);
            console.log(currentPosArr[index]); */
          },
          linesLista[index].euclideanArray,
          noteSpeedArray[index]
        )
      );
      

    });

    return { initialList, currentPosArr};
  };

  export default creaSequenceList

