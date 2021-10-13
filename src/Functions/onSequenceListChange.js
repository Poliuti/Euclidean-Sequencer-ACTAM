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


}


export default onSequenceListChange