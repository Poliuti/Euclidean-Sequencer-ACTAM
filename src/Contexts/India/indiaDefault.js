import bjorklund from "../../bjorklund";

let indiaDefault = [  // Lista iniziale dei parametri euclidiani
    {
      numSteps: 7,
      numPulses: 3,
      numRotations: 4,
      euclideanArray: [...bjorklund(7, 3, 4)],
      id: 0,
      mute: false,
      solo: false
    },
    {
      numSteps: 8,
      numPulses: 1,
      numRotations: 0,
      euclideanArray: [...bjorklund(8, 1, 0)],
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


  export default indiaDefault