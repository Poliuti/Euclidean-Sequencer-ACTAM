import {
  Sequence,
  Transport
} from "tone";

import {
  activeColor,
  currentColor
} from "./../Default/colori";
import creaSequenceListModeTwo from "./creaSequenceListMode2";
import creaSequenceListModeOne from "./creaSequenceListModeOne";


const creaSequenceList = ( // funzione che crea le vere e proprie sequenze (Tone.js), ritorna la lista aggiornata e la lista del tick position
  patternList,
  initialList,
  noteArray,
  noteSpeedArray,
  instrumentList,
  initialPositionArray,
  mode,
  selectedPatternExt


) => {

  if (mode)


  {

    let currentPosArr = initialPositionArray;


    /*     patternList.forEach((line, id) =>{
          colora(line, id);
        }); */


        
    

    initialList = creaSequenceListModeOne(patternList, initialList, currentPosArr, instrumentList, noteArray, initialPositionArray, noteSpeedArray);


    return initialList

  } else {
    let currentPos = initialPositionArray[0];



    initialList = creaSequenceListModeTwo(selectedPatternExt,initialList,  instrumentList, noteArray, initialPositionArray, noteSpeedArray, currentPos);



    /* selectedPatternExt.map((line, index) => {

      initialList.push(
        new Sequence(
          (time, event) => {


            currentPosArr %= line.length;
           

            let dot = document.getElementById(`${index}${currentPosArr}`);


            let dotColor = dot.style.backgroundColor;

            if (event === 1 && Transport.state === "started" && dotColor === activeColor[index]) {

              instrumentList[index].triggerAttackRelease(
                noteArray[index],
                "16n",
                time
              );




            }






            if (Transport.state === "started") {
              dot.style.backgroundColor = currentColor;


              Transport.scheduleOnce(() => {
                dot.style.backgroundColor = dotColor;
              }, "+0.005");

              if (index === (numLines - 1)) {
                currentPosArr++
              }

            } else {
              currentPosArr = initialPositionArray[0];
            }





          },
          line,
          noteSpeedArray[index]
        )
      );


    }); */

    return initialList
  }
};

export default creaSequenceList
