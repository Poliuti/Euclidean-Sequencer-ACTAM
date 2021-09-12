import bjorklund from "./../Functions/bjorklund";

const setInitialSettings = (defaultInfo) => {
    let defaultInfoo = defaultInfo.map((pattern, index) => {

        pattern.euclideanArray = bjorklund(pattern.numSteps, pattern.numPulses, pattern.numRotations);
        pattern.id = index;
        return pattern


    });

    return defaultInfoo;
}

export default setInitialSettings
