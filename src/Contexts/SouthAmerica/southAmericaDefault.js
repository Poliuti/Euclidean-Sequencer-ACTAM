import bjorklund from "../../bjorklund";

let southAmericaDefault = [  // Lista iniziale dei parametri euclidiani
    {
      numSteps: 19,
      numPulses: 10,
      numRotations: 3,
      euclideanArray: [...bjorklund(19, 10, 3)],
      id: 0,
      mute: false,
      solo: false
    },
    {
      numSteps: 13,
      numPulses: 1,
      numRotations: 3,
      euclideanArray: [...bjorklund(13, 1, 3)],
      id: 1,
      mute: false,
      solo: false
    },
    {
      numSteps: 10,
      numPulses: 4,
      numRotations: 7,
      euclideanArray: [...bjorklund(10, 4, 7)],
      id: 2,
      mute: false,
      solo: false
    },
    {
      numSteps: 20,
      numPulses: 2,
      numRotations: 4,
      euclideanArray: [...bjorklund(20, 2, 4)],
      id: 3,
      mute: false,
      solo: false
    },
  ];


  export default southAmericaDefault