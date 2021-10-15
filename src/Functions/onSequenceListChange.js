
const onSequenceListChange = (sequences, patternList, transportState) => {


  if (transportState) {
    
    sequences.forEach((seq) => {
      seq.start("+0.1");
    });
    
  }


}


export default onSequenceListChange