const initPatternNames = (envDefaultPatterns) => {
    const patternNames = envDefaultPatterns.map((pattern) => {
      let patternName =
        pattern.name +
        "    " +
        `(${pattern.numSteps}, ${pattern.numPulses}, ${pattern.numRotations})`;
      return patternName;
    })

    return patternNames
}


export default initPatternNames