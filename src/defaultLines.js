import setInitialSettings from "./setInitialSettings"

let defaultLines = {
    custom: [  
        [{
         numSteps: 8,
         numPulses: 5,
         numRotations: 0,
         name: "Tresillo",
       },
       {
         numSteps: 8,
         numPulses: 1,
         numRotations: 0,
         name: "Cinquillo"
       },
       {
         numSteps: 10,
         numPulses: 4,
         numRotations: 0,
         name: "Settilio"
     
       },
       {
         numSteps: 5,
         numPulses: 2,
         numRotations: 0,
         name: "daje"
       }],
       [  // Lista iniziale dei parametri euclidiani MODE 1
         {
           numSteps: 7,
           numPulses: 3,
           numRotations: 4
         },
         {
           numSteps: 8,
           numPulses: 1,
           numRotations: 0
         },
         {
           numSteps: 10,
           numPulses: 4,
           numRotations: 7
         },
         {
           numSteps: 5,
           numPulses: 2,
           numRotations: 4
         }
     
        
       ],
       
       
     ],
    india: [  
        [{
         numSteps: 8,
         numPulses: 5,
         numRotations: 0,
         name: "India 1",
       },
       {
         numSteps: 11,
         numPulses: 5,
         numRotations: 0,
         name: "India 2"
       },
       {
         numSteps: 13,
         numPulses: 4,
         numRotations: 0,
         name: "India 3"
     
       },
       {
         numSteps: 5,
         numPulses: 2,
         numRotations: 0,
         name: "daje"
       }],
       [  // Lista iniziale dei parametri euclidiani MODE 1
         {
           numSteps: 15,
           numPulses: 9,
           numRotations: 4
         },
         {
           numSteps: 8,
           numPulses: 3,
           numRotations: 0
         },
         {
           numSteps: 10,
           numPulses: 6,
           numRotations: 7
         },
         {
           numSteps: 5,
           numPulses: 2,
           numRotations: 4
         }
     
        
       ],
       
       
     ],
    middleEast: [  
        [{
         numSteps: 8,
         numPulses: 5,
         numRotations: 0,
         name: "Tresillo",
       },
       {
         numSteps: 8,
         numPulses: 1,
         numRotations: 0,
         name: "Cinquillo"
       },
       {
         numSteps: 10,
         numPulses: 4,
         numRotations: 0,
         name: "Settilio"
     
       },
       {
         numSteps: 5,
         numPulses: 2,
         numRotations: 0,
         name: "daje"
       }],
       [  // Lista iniziale dei parametri euclidiani MODE 1
         {
           numSteps: 7,
           numPulses: 3,
           numRotations: 4
         },
         {
           numSteps: 8,
           numPulses: 1,
           numRotations: 0
         },
         {
           numSteps: 10,
           numPulses: 4,
           numRotations: 7
         },
         {
           numSteps: 5,
           numPulses: 2,
           numRotations: 4
         }
     
        
       ],
       
       
     ],
    restOfTheWorld: [  
        [{
         numSteps: 8,
         numPulses: 5,
         numRotations: 0,
         name: "Tresillo",
       },
       {
         numSteps: 8,
         numPulses: 1,
         numRotations: 0,
         name: "Cinquillo"
       },
       {
         numSteps: 10,
         numPulses: 4,
         numRotations: 0,
         name: "Settilio"
     
       },
       {
         numSteps: 5,
         numPulses: 2,
         numRotations: 0,
         name: "daje"
       }],
       [  // Lista iniziale dei parametri euclidiani MODE 1
         {
           numSteps: 7,
           numPulses: 3,
           numRotations: 4
         },
         {
           numSteps: 8,
           numPulses: 1,
           numRotations: 0
         },
         {
           numSteps: 10,
           numPulses: 4,
           numRotations: 7
         },
         {
           numSteps: 5,
           numPulses: 2,
           numRotations: 4
         }
     
        
       ],
       
       
     ],
    africa: [  
        [{
         numSteps: 18,
         numPulses: 13,
         numRotations: 0,
         name: "Eddaiii",
       },
       {
         numSteps: 8,
         numPulses: 1,
         numRotations: 0,
         name: "Cinquillo"
       },
       {
         numSteps: 10,
         numPulses: 4,
         numRotations: 0,
         name: "Settilio"
     
       },
       {
         numSteps: 5,
         numPulses: 2,
         numRotations: 0,
         name: "daje"
       }],
       [  // Lista iniziale dei parametri euclidiani MODE 1
         {
           numSteps: 15,
           numPulses: 11,
           numRotations: 7
         },
         {
           numSteps: 8,
           numPulses: 1,
           numRotations: 0
         },
         {
           numSteps: 10,
           numPulses: 4,
           numRotations: 7
         },
         {
           numSteps: 5,
           numPulses: 2,
           numRotations: 4
         }
     
        
       ],
       
       
     ],
    southAmerica: [  
        [{
         numSteps: 8,
         numPulses: 5,
         numRotations: 0,
         name: "Tresillo",
       },
       {
         numSteps: 8,
         numPulses: 1,
         numRotations: 0,
         name: "Cinquillo"
       },
       {
         numSteps: 10,
         numPulses: 4,
         numRotations: 0,
         name: "Settilio"
     
       },
       {
         numSteps: 5,
         numPulses: 2,
         numRotations: 0,
         name: "daje"
       }],
       [  // Lista iniziale dei parametri euclidiani MODE 1
         {
           numSteps: 7,
           numPulses: 3,
           numRotations: 4
         },
         {
           numSteps: 8,
           numPulses: 1,
           numRotations: 0
         },
         {
           numSteps: 10,
           numPulses: 4,
           numRotations: 7
         },
         {
           numSteps: 5,
           numPulses: 2,
           numRotations: 4
         }
     
        
       ],
       
       
     ]

}


// autogenero info aggiuntive in defaultLines
Object.keys(defaultLines).forEach((key) => 
        defaultLines[key] = defaultLines[key].map((mode) => 
        setInitialSettings(mode))
         
);






export default defaultLines