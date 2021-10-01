import {
  Transport
} from "tone";
import colora from "./colora";

const onSequenceListChange = (sequences, patternList, transportState) => {


  if (transportState) {
    
    sequences.forEach((seq) => {
      seq.start("+0.1");
    });
    
  }



  patternList.forEach((line, ind) => {
    colora(line, ind);
  })

  Transport.scheduleOnce(() => {
    patternList.forEach((line, ind) => {
      colora(line, ind);

    })
  }, "+0.4");





}


export default onSequenceListChange