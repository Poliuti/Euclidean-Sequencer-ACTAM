const initializePatternArray = (chosenPattern, numSamples) => {

    let initialArray = [];
    const euclideanArray = chosenPattern.euclideanArray;
    for (let i = 0; i < numSamples; i++) {
        initialArray.push(euclideanArray)
    };
    return initialArray;

  
}

export default initializePatternArray