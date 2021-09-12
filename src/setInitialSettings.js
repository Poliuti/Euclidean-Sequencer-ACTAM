import bjorklund from "./bjorklund";

const setInitialSettings = (defaultInfo) => {
    let defaultInfoo = defaultInfo.map((pattern, index) => {

        pattern.euclideanArray = bjorklund(pattern.numSteps, pattern.numPulses, pattern.numRotations);
        pattern.id = index;
        /* pattern.channelInfo = {};
        pattern.channelInfo.numChannel = index;
        pattern.channelInfo.mute = "false";
        pattern.channelInfo.solo = "false"; */
        return pattern
        

    });

    console.log("Sta avvenendo Ora")
    return defaultInfoo;
}

export default setInitialSettings

