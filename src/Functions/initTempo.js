const initTempo = (numInstr, bpm) => {


  let tempoSpeedIndex = [];
  let tempoSpeedIndexForTone = [];
  for (let i = 0; i < numInstr; i++) {
        tempoSpeedIndex.push(1);
        tempoSpeedIndexForTone.push("8n");  
        
  };

  const tempoInfo = {
      bpm: bpm,
      tempoSpeedIndex: tempoSpeedIndex,
      tempoSpeedIndexForTone: tempoSpeedIndexForTone
  }

  return tempoInfo
}

export default initTempo