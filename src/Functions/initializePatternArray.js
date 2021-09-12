const initializePatternArray = (chosenPattern, numSamples) => {

    let clickState = [];
    const euclideanArray = chosenPattern.euclideanArray;
    for (let i = 0; i < numSamples; i++) {
        clickState.push(euclideanArray)
    };
    return clickState;

  
}

export default initializePatternArray