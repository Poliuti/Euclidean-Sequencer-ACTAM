import EuclideanLine from "../EuclideanLine";


let defaultLines = {
    custom: [  // Lista iniziale dei parametri euclidiani MODE 2
        [new EuclideanLine(8, 5, 0, 'Tresillo'),
        new EuclideanLine(8, 1, 0, 'Cinquillo'),
        new EuclideanLine(10, 4, 0, 'Settillo'),
        new EuclideanLine(5, 2, 0, 'Daje'),
       ],
       [  // Lista iniziale dei parametri euclidiani MODE 1
        new EuclideanLine(7, 3, 4, ''),
        new EuclideanLine(8, 1, 0, ''),
        new EuclideanLine(5, 2, 4, ''),
        new EuclideanLine(10, 4, 7, '')
       ],
       
       
     ],
    india:[  
        [new EuclideanLine(8, 5, 0, 'Tresillo'),
        new EuclideanLine(8, 1, 0, 'Magentium'),
        new EuclideanLine(10, 4, 0, 'Settillo'),
        new EuclideanLine(5, 2, 0, 'Daje'),
       ],
       [  // Lista iniziale dei parametri euclidiani MODE 1
        new EuclideanLine(7, 3, 4, ''),
        new EuclideanLine(8, 1, 0, ''),
        new EuclideanLine(5, 2, 4, ''),
        new EuclideanLine(10, 4, 7, '')
       ],
       
       
     ],
    middleEast: [  
        [new EuclideanLine(8, 5, 0, 'Tresillo'),
        new EuclideanLine(8, 1, 0, 'Achraf'),
        new EuclideanLine(10, 4, 0, 'Settillo'),
        new EuclideanLine(5, 2, 0, 'Daje'),
       ],
       [  // Lista iniziale dei parametri euclidiani MODE 1
        new EuclideanLine(7, 3, 4, ''),
        new EuclideanLine(8, 1, 0, ''),
        new EuclideanLine(5, 2, 4, ''),
        new EuclideanLine(10, 4, 7, '')
       ],
       
       
     ],
    restOfTheWorld: [  
        [new EuclideanLine(8, 5, 0, 'Tresillo'),
        new EuclideanLine(8, 1, 0, 'Cinquillo'),
        new EuclideanLine(10, 4, 0, 'Settillo'),
        new EuclideanLine(5, 2, 0, 'Daje'),
       ],
       [  // Lista iniziale dei parametri euclidiani MODE 1
        new EuclideanLine(7, 3, 4, ''),
        new EuclideanLine(8, 1, 0, ''),
        new EuclideanLine(5, 2, 4, ''),
        new EuclideanLine(10, 4, 7, '')
       ],
       
       
     ],
    africa: [  
        [new EuclideanLine(8, 5, 0, 'Kalulu'),
        new EuclideanLine(8, 1, 0, 'Cinquillo'),
        new EuclideanLine(10, 4, 0, 'Settillo'),
        new EuclideanLine(5, 2, 0, 'Daje'),
       ],
       [  // Lista iniziale dei parametri euclidiani MODE 1
        new EuclideanLine(7, 3, 4, ''),
        new EuclideanLine(8, 1, 0, ''),
        new EuclideanLine(5, 2, 4, ''),
        new EuclideanLine(10, 4, 7, '')
       ],
       
       
     ],
    southAmerica: [  
        [new EuclideanLine(8, 5, 0, 'Fuego'),
        new EuclideanLine(8, 1, 0, 'Cinquillo'),
        new EuclideanLine(10, 4, 0, 'Settillo'),
        new EuclideanLine(5, 2, 0, 'Daje'),
       ],
       [  // Lista iniziale dei parametri euclidiani MODE 1
        new EuclideanLine(7, 3, 4, ''),
        new EuclideanLine(8, 1, 0, ''),
        new EuclideanLine(5, 2, 4, ''),
        new EuclideanLine(10, 4, 7, '')
       ],
       
       
     ],

}

//setting EuclideanLines.id
 Object.keys(defaultLines).forEach((key) =>
     defaultLines[key] = defaultLines[key].map((mode) =>
         mode.map((line, ind) => {
             line.setId(ind);

             return line
         })
     )
 );

export default defaultLines



