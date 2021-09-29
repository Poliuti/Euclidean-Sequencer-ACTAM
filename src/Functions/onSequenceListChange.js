import {
  Transport
} from "tone";
import colora from "./colora";

const onSequenceListChange = (sequences, patternList, transportState) => {

console.log("transportState");
console.log(transportState);

  if (transportState) {
    sequences.forEach((seq) => {
      seq.start("0:0:0");
    });
  }



  patternList.forEach((line, ind) => {
    colora(line, ind);
  })

  Transport.scheduleOnce(() => {
    patternList.forEach((line, ind) => {
      colora(line, ind);

    })
  }, "+0.5");





}


export default onSequenceListChange