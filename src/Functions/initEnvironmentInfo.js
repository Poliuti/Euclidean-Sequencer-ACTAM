import initTempo from "./initTempo"

const initEnvironmentInfo = (numInstr, bpm) => {
    const tempoInfo = initTempo(numInstr, bpm);
    let initPosArray = [];
    for (let i = 0; i < numInstr; i++) {
        initPosArray.push(0);
    }
    let noteArray = [];
    for (let i = 0; i < numInstr; i++) {
        noteArray.push("A1");
    }
    return {tempoInfo, initPosArray, noteArray}
}

export default initEnvironmentInfo