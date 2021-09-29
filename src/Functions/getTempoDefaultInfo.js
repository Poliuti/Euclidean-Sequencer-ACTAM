const getTempoDefaultInfo = (numInstruments) => {
    let tempoSpeedIndex = [];
    let tempoSpeedIndexForTone
    for (let i = 0; i < numInstruments; i++) {
        tempoSpeedIndex.push(1);
        tempoSpeedIndexForTone.push("8n");
    }
    let tempoDefault = {
        bpm: 120,
        tempoSpeedIndex: tempoSpeedIndex,
        tempoSpeedIndexForTone: tempoSpeedIndexForTone,
    };

    return tempoDefault;
}

export default getTempoDefaultInfo;