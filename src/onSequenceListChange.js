import { Transport } from "tone";
import colora from "./Controls/colora";

const onSequenceListChange = (sequences, patternList) => {
    sequences.forEach((seq, index) => {
        seq.start("0:0:0");
      });
  
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