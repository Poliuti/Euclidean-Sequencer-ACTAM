import {
  Sequence,
  Transport
} from "tone";

import {
  activeColor,
  currentColor
} from "./../Default/colori";


const creaSequenceList = ( // funzione che crea le vere e proprie sequenze (Tone.js), ritorna la lista aggiornata e la lista del tick position
  patternList,
  initialList,
  noteArray,
  noteSpeedArray,
  instrumentList,
  initialPositionArray,
  mode,
  clickedState


) => {

  if (mode)


  {

    let currentPosArr = initialPositionArray;


    /*     patternList.forEach((line, id) =>{
          colora(line, id);
        }); */



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

  } else {
    let currentPosArr = initialPositionArray[0];



    let numLines = clickedState.length;




    

    clickedState.map((line, index) => {

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


    });

    return initialList
  }
};

export default creaSequenceList
