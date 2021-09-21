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
        [
        new EuclideanLine(5,3,0, 'Caturthaka'),
        new EuclideanLine(5,3,3, 'Dhenki'),
        new EuclideanLine(8,3,5, 'Mathya-Tisra'),
        new EuclideanLine(11,3,0, 'Savari Tal'),
        new EuclideanLine(14,3,0, 'Dhamar Tal'),
        new EuclideanLine(11,4,0, 'Dhruva Tisra'),
        new EuclideanLine(15,4,0, 'Pancam Savari Tal'),
        new EuclideanLine(11,5,0, 'Hindustani Sav-ar-i Tala')
        ],
       [  // Lista iniziale dei parametri euclidiani MODE 1
        new EuclideanLine(7, 3, 4, ''),
        new EuclideanLine(8, 1, 0, ''),
        new EuclideanLine(5, 2, 4, ''),
        new EuclideanLine(10, 4, 7, '')
       ],
       
       
     ],

    // IMPORTANT CHANGE THE NAME: middleEast --> Europe 
    middleEast: [  
        [
        new EuclideanLine(5, 2, 0, 'Greek Rhythm 1'),
        new EuclideanLine(7, 2, 0, 'Macedonian Lesnoto Dance'),
        new EuclideanLine(7, 3, 0, 'Greek Rhythm 2'),
        new EuclideanLine(7, 3, 5, 'Serbian Rhythm 1'),
        new EuclideanLine(7, 3, 3, 'Turkish Rhythm 1'),
        new EuclideanLine(5, 4, 0, 'Greek Mirena Rhythm'),
        new EuclideanLine(5, 4, 2, 'Greek Tik Rhythm'),
        new EuclideanLine(7, 4, 0, 'Bulgarian Ruchenitza Folk Dance'),
        new EuclideanLine(7, 4, 3, 'Greek Kalamatianos Dance'),
        new EuclideanLine(9, 4, 0, 'Turkish Aksak'),
        new EuclideanLine(9, 4, 7, 'Bulgarian and Serbian Rhythm'),
        new EuclideanLine(9, 4, 5, 'Bulgarian and Greek Rhythm'),
        new EuclideanLine(9, 4, 3, 'Turkish Rhythm 2'),
        new EuclideanLine(11, 4, 5, 'Serbian Rhythm 2'),
        new EuclideanLine(8, 5, 5, 'Turkish Musemmen'),
        new EuclideanLine(9, 5, 5, 'Turkish Nawahiid'),
        new EuclideanLine(11, 5, 7, 'Macedonian Kalajdzijsko Oro Dance'),
        new EuclideanLine(13, 5, 0, 'Macedonian Rhythm 1'),
        new EuclideanLine(13, 5, 5, 'Macedonian Rhythm 2'),
        new EuclideanLine(7, 6, 2, 'Greek Pontakos'),
        new EuclideanLine(13, 6, 0, 'Macedonian Mama Cone Pita Dance'),
        new EuclideanLine(13, 6, 9, 'Macedonian Postupano Oro Dance'),
        new EuclideanLine(9, 7, 0, 'Greek Bazaragana'),
        new EuclideanLine(10, 7, 0, 'Turkish Lenk Fahhte'),
        new EuclideanLine(15, 7, 11, 'Bulgarian Rhythm 1'),
        new EuclideanLine(16, 7, 13, 'Yugoslavian Rhythm 1'),
        new EuclideanLine(17, 7, 14, 'Macedonian Rhythm 3'),
        new EuclideanLine(18, 7, 0, 'Bulgarian Rhythm 2'),
        new EuclideanLine(17, 8, 0, 'Bulgarian Rhythm 3'),
        new EuclideanLine(17, 8, 9, 'Bulgarian Rhythm 4'),
        new EuclideanLine(19, 8, 0, 'Bulgarian Rhythm 5'),
        new EuclideanLine(19, 8, 16, 'Bulgarian Rhythm 6'),
        new EuclideanLine(22, 9, 19, 'Bulgarian Rhythm 7'),
        new EuclideanLine(23, 9, 0, 'Bulgarian Rhythm 8'),
        new EuclideanLine(24, 11, 21, 'Bulgarian Rhythm 9'),
        new EuclideanLine(34, 15, 4, 'Bulgarian Rhythm 10')
        ],
       [  // Lista iniziale dei parametri euclidiani MODE 1
        new EuclideanLine(7, 3, 4, ''),
        new EuclideanLine(8, 1, 0, ''),
        new EuclideanLine(5, 2, 4, ''),
        new EuclideanLine(10, 4, 7, '')
       ],
       
       
     ],
    restOfTheWorld: [  
        [
        new EuclideanLine(8, 3, 1, 'Burmese Rhythm'),
        new EuclideanLine(7, 4, 5, 'Thai Dance Dramas'),
        new EuclideanLine(7, 4, 1, 'Yemeni Dar Daasa al Mutawasit'),
        new EuclideanLine(11, 4, 2, 'Yemeni Daasa al Kbiri'),
        new EuclideanLine(6, 5, 0, 'Arab York-Samai'),
        new EuclideanLine(7, 5, 0, 'Arab Nawakhat'),
        new EuclideanLine(8, 5, 7, 'Burmese Rhythm'),
        new EuclideanLine(9, 5, 0, 'Arab Agsag-Samai'),
        new EuclideanLine(8, 7, 1, 'Indonesian Rhythm 1'),
        new EuclideanLine(13, 9, 1, 'Bohlen-Pierce Scale Pattern'),
        new EuclideanLine(20, 9, 2, 'Balzanos 20 Fold Scale'),
        new EuclideanLine(12, 11, 11, 'Omani Sot Silam Dance'),
        new EuclideanLine(20, 11, 6, 'Eleven-note Scale'),
        new EuclideanLine(30, 19, 5, 'Nineteen-note Scale')
        ],
       [  // Lista iniziale dei parametri euclidiani MODE 1
        new EuclideanLine(7, 3, 4, ''),
        new EuclideanLine(8, 1, 0, ''),
        new EuclideanLine(5, 2, 4, ''),
        new EuclideanLine(10, 4, 7, '')
       ],
       
       
     ],
    africa: [  
        [
        new EuclideanLine(3, 2, 2, 'Hand-clapping Bantu Pattern'),
        new EuclideanLine(3, 2, 1, 'Complementary African Rhythm'),
        new EuclideanLine(5, 2, 3, 'Central African Rhythm 1'),
        new EuclideanLine(4, 3, 2, 'Chingo Mandinka'),
        new EuclideanLine(8, 3, 2, 'Ghanaian Nandon Bawaa'),
        new EuclideanLine(10, 3, 7, 'Tuareg Rhythm 1'),
        new EuclideanLine(8, 5, 3, 'West African Gabada'),
        new EuclideanLine(9, 5, 7, 'South African Venda'),
        new EuclideanLine(12, 5, 0, 'Central African Aka Pygmies Rhythm 1'),
        new EuclideanLine(12, 5, 7, 'Northern Zimbabwean Bemba Pattern 1'),
        new EuclideanLine(12, 5, 4, 'African Clapping Pattern'),
        new EuclideanLine(8, 7, 2, 'Tuareg Rhythm 2'),
        new EuclideanLine(12, 7, 0, 'Ghanaian Ashanti Rhythm'),
        new EuclideanLine(12, 7, 10, 'Ghanaian Hand Clapping Pattern 1'),
        new EuclideanLine(12, 7, 9, 'Sub-Saharan Rhythm 1'),
        new EuclideanLine(12, 7, 7, 'Northern Zimbabwean Bemba Pattern 2'),
        new EuclideanLine(12, 7, 5, 'Central African Aka Pygmies Bondo'),
        new EuclideanLine(12, 7, 2, 'Nigerian Yoruba'),
        new EuclideanLine(16, 7, 6, 'Ghanaian Hand Clapping Pattern 2'),
        new EuclideanLine(14, 9, 12, 'Algerian Tsofyan Rhythm'),
        new EuclideanLine(16, 9, 14, 'Congolese Luba Pattern'),
        new EuclideanLine(16, 9, 11, 'West and Central African Rhythm'),
        new EuclideanLine(16, 9, 6, 'Central African Kachacha'),
        new EuclideanLine(16, 9, 4, 'Central African Ngbaka-Maibo'),
        new EuclideanLine(24, 11, 0, 'Central African Aka Pygmies Rhythm 2'),
        new EuclideanLine(24, 11, 10, 'Central African Aka Pygmies Rhythm 3'),
        new EuclideanLine(24, 13, 0, 'Central African Aka Pygmies Rhythm 4'),
        new EuclideanLine(24, 13, 4, 'Central African Aka Pygmies Rhythm 5')
        ],
       [  // Lista iniziale dei parametri euclidiani MODE 1
        new EuclideanLine(7, 3, 4, ''),
        new EuclideanLine(8, 1, 0, ''),
        new EuclideanLine(5, 2, 4, ''),
        new EuclideanLine(10, 4, 7, '')
       ],
       
       
     ],

    // IMPORTANT CHANGE THE NAME: southAmerica --> CentralAndSouthAmerica 
    southAmerica: [  
        [
        new EuclideanLine(3, 2, 0, 'Mexican Corn Dance'),
        new EuclideanLine(4, 3, 0, 'Brazilian Baiaò Rhythm'),
        new EuclideanLine(4, 3, 3, 'Brazilian Catarete Rhythm'),
        new EuclideanLine(4, 3, 1, 'Flamenco Rhythm'),
        new EuclideanLine(8, 3, 0, 'Cuban Tresillo'),
        new EuclideanLine(8, 5, 0, 'Cuban Cinquillo'),
        new EuclideanLine(8, 5, 6, 'Argentinian Tango'),
        new EuclideanLine(8, 5, 2, 'Cuban Habanera'),
        new EuclideanLine(12, 5, 9, 'Cuban Columbia Pattern 1'),
        new EuclideanLine(12, 5, 2, 'Dominican Salve Pattern'),
        new EuclideanLine(16, 5, 0, 'Brazilian Bossa Nova 1'),
        new EuclideanLine(16, 5, 10, 'Brazilian Bossa Nova 2'),
        new EuclideanLine(16, 5, 13, 'Brazilian Bossa Nova 3'),
        new EuclideanLine(12, 7, 4, 'Caribbean Tambù'),
        new EuclideanLine(12, 7, 3, 'Cuban Columbia Pattern 2'),
        new EuclideanLine(16, 7, 0, 'Brazilian Samba 1'),
        new EuclideanLine(16, 7, 2, 'Brazilian Samba 2'),
        new EuclideanLine(16, 7, 10, 'Brazilian Partido Alto Rhythm'),
        new EuclideanLine(16, 9, 0, 'Cuban Rumba Palitos Rhythm')
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



