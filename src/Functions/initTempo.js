const initTempo = (numInstr, bpm) => {


  let stepDurationModifierArray = [];
  let stepDurationArray = [];
  for (let i = 0; i < numInstr; i++) {
        stepDurationModifierArray.push(1);
        stepDurationArray.push("8n");  
        
  };

  const tempoInfo = {
      bpm: bpm,
      stepDurationModifierArray: stepDurationModifierArray,
      stepDurationArray: stepDurationArray
  }

  return tempoInfo
}

export default initTempo