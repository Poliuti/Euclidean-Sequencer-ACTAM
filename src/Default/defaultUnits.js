import EuclideanUnit from "../EuclideanUnit";

//Default Info for every environment

let defaultUnits = {
    custom: { 
        traditional: [
        ],
        init:[ 
            new EuclideanUnit(8, 3, 0, ''),
            new EuclideanUnit(8, 1, 4, ''),
            new EuclideanUnit(5, 2, 2, ''),
            new EuclideanUnit(10, 3, 5, '')
        ],


    },
    asia: {
        traditional: [ // List of Traditional Rhythms
            new EuclideanUnit(5, 3, 0, 'Caturthaka'),
            new EuclideanUnit(5, 3, 3, 'Dhenki'),
            new EuclideanUnit(6, 5, 0, 'Arab York-Samai'),
            new EuclideanUnit(7, 4, 1, 'Yemeni Dar Daasa al Mutawasit'),
            new EuclideanUnit(7, 4, 5, 'Thai Dance Dramas'),
            new EuclideanUnit(7, 5, 0, 'Arab Nawakhat'),
            new EuclideanUnit(8, 3, 1, 'Burmese Rhythm'),
            new EuclideanUnit(8, 3, 5, 'Mathya-Tisra'),
            new EuclideanUnit(8, 5, 7, 'Burmese Rhythm'),
            new EuclideanUnit(8, 7, 1, 'Indonesian Rhythm 1'),
            new EuclideanUnit(9, 5, 0, 'Arab Agsag-Samai'),
            new EuclideanUnit(11, 3, 0, 'Savari Tal'),
            new EuclideanUnit(11, 4, 0, 'Dhruva Tisra'),
            new EuclideanUnit(11, 4, 2, 'Yemeni Daasa al Kbiri'),
            new EuclideanUnit(11, 5, 0, 'Hindustani Sav-ar-i Tala'),
            new EuclideanUnit(12, 11, 11, 'Omani Sot Silam Dance'),
            new EuclideanUnit(13, 9, 1, 'Bohlen-Pierce Scale Pattern'),
            new EuclideanUnit(14, 3, 0, 'Dhamar Tal'),
            new EuclideanUnit(15, 4, 0, 'Pancam Savari Tal'),
            new EuclideanUnit(20, 9, 2, 'Balzanos 20 Fold Scale'),
            new EuclideanUnit(20, 11, 6, 'Eleven-note Scale'),
            new EuclideanUnit(30, 19, 5, 'Nineteen-note Scale')
        ],
        init: [ // initial default list for the environment
            new EuclideanUnit(8, 3, 5, ''),
            new EuclideanUnit(8, 1, 4, ''),
            new EuclideanUnit(5, 2, 4, ''),
            new EuclideanUnit(14, 6, 7, '')
        ],
     } ,
     europe: {
        traditional:[
            new EuclideanUnit(5, 2, 0, 'Greek Rhythm 1'),
            new EuclideanUnit(5, 4, 0, 'Greek Mirena Rhythm'),
            new EuclideanUnit(5, 4, 2, 'Greek Tik Rhythm'),
            new EuclideanUnit(7, 2, 0, 'Macedonian Lesnoto Dance'),
            new EuclideanUnit(7, 3, 0, 'Greek Rhythm 2'),
            new EuclideanUnit(7, 3, 5, 'Serbian Rhythm 1'),
            new EuclideanUnit(7, 3, 3, 'Turkish Rhythm 1'),
            new EuclideanUnit(7, 4, 0, 'Bulgarian Ruchenitza Folk Dance'),
            new EuclideanUnit(7, 4, 3, 'Greek Kalamatianos Dance'),
            new EuclideanUnit(7, 6, 2, 'Greek Pontakos'),
            new EuclideanUnit(8, 5, 5, 'Turkish Musemmen'),
            new EuclideanUnit(9, 4, 0, 'Turkish Aksak'),
            new EuclideanUnit(9, 4, 3, 'Turkish Rhythm 2'),
            new EuclideanUnit(9, 4, 5, 'Bulgarian and Greek Rhythm'),
            new EuclideanUnit(9, 4, 7, 'Bulgarian and Serbian Rhythm'),
            new EuclideanUnit(9, 5, 5, 'Turkish Nawahiid'),
            new EuclideanUnit(9, 7, 0, 'Greek Bazaragana'),
            new EuclideanUnit(10, 7, 0, 'Turkish Lenk Fahhte'),
            new EuclideanUnit(11, 4, 5, 'Serbian Rhythm 2'),
            new EuclideanUnit(11, 5, 7, 'Macedonian Kalajdzijsko Oro Dance'),
            new EuclideanUnit(13, 5, 0, 'Macedonian Rhythm 1'),
            new EuclideanUnit(13, 5, 5, 'Macedonian Rhythm 2'),
            new EuclideanUnit(13, 6, 0, 'Macedonian Mama Cone Pita Dance'),
            new EuclideanUnit(13, 6, 9, 'Macedonian Postupano Oro Dance'),
            
            new EuclideanUnit(15, 7, 11, 'Bulgarian Rhythm 1'),
            new EuclideanUnit(16, 7, 13, 'Yugoslavian Rhythm 1'),
            new EuclideanUnit(17, 7, 14, 'Macedonian Rhythm 3'),
            new EuclideanUnit(17, 8, 0, 'Bulgarian Rhythm 3'),
            new EuclideanUnit(17, 8, 9, 'Bulgarian Rhythm 4'),
            new EuclideanUnit(18, 7, 0, 'Bulgarian Rhythm 2'),
            new EuclideanUnit(19, 8, 0, 'Bulgarian Rhythm 5'),
            new EuclideanUnit(19, 8, 16, 'Bulgarian Rhythm 6'),
            new EuclideanUnit(22, 9, 19, 'Bulgarian Rhythm 7'),
            new EuclideanUnit(23, 9, 0, 'Bulgarian Rhythm 8'),
            new EuclideanUnit(24, 11, 21, 'Bulgarian Rhythm 9')
            
        ],
        init: [ // Lista iniziale dei parametri euclidiani MODE 1
            new EuclideanUnit(7, 3, 0, ''),
            new EuclideanUnit(8, 2, 2, ''),
            new EuclideanUnit(9, 3, 0, ''),
            new EuclideanUnit(16, 4, 2, '')
        ],


     },
    africa: {
        traditional:[
            new EuclideanUnit(3, 2, 2, 'Hand-clapping Bantu Pattern'),
            new EuclideanUnit(3, 2, 1, 'Complementary African Rhythm'),
            new EuclideanUnit(4, 3, 2, 'Chingo Mandinka'),
            new EuclideanUnit(5, 2, 3, 'Central African Rhythm 1'),
            new EuclideanUnit(8, 3, 2, 'Ghanaian Nandon Bawaa'),
            new EuclideanUnit(8, 5, 3, 'West African Gabada'),
            new EuclideanUnit(8, 7, 2, 'Tuareg Rhythm 2'),
            new EuclideanUnit(9, 5, 7, 'South African Venda'),
            new EuclideanUnit(10, 3, 7, 'Tuareg Rhythm 1'),
            new EuclideanUnit(12, 5, 0, 'Central African Aka Pygmies Rhythm 1'),
            new EuclideanUnit(12, 5, 4, 'African Clapping Pattern'),
            new EuclideanUnit(12, 5, 7, 'Northern Zimbabwean Bemba Pattern 1'),
            new EuclideanUnit(12, 7, 0, 'Ghanaian Ashanti Rhythm'),
            new EuclideanUnit(12, 7, 2, 'Nigerian Yoruba'),
            new EuclideanUnit(12, 7, 5, 'Central African Aka Pygmies Bondo'),
            new EuclideanUnit(12, 7, 7, 'Northern Zimbabwean Bemba Pattern 2'),
            new EuclideanUnit(12, 7, 9, 'Sub-Saharan Rhythm 1'),
            new EuclideanUnit(12, 7, 10, 'Ghanaian Hand Clapping Pattern 1'),
            new EuclideanUnit(14, 9, 12, 'Algerian Tsofyan Rhythm'),
            new EuclideanUnit(16, 7, 6, 'Ghanaian Hand Clapping Pattern 2'),
            new EuclideanUnit(16, 9, 4, 'Central African Ngbaka-Maibo'),
            new EuclideanUnit(16, 9, 6, 'Central African Kachacha'),
            new EuclideanUnit(16, 9, 11, 'West and Central African Rhythm'),
            new EuclideanUnit(16, 9, 14, 'Congolese Luba Pattern'),
            new EuclideanUnit(24, 11, 0, 'Central African Aka Pygmies Rhythm 2'),
            new EuclideanUnit(24, 11, 10, 'Central African Aka Pygmies Rhythm 3'),
            new EuclideanUnit(24, 13, 0, 'Central African Aka Pygmies Rhythm 4'),
            new EuclideanUnit(24, 13, 4, 'Central African Aka Pygmies Rhythm 5')
        ],
        init:[ // Lista iniziale dei parametri euclidiani MODE 1
            new EuclideanUnit(17, 5, 0, ''),
            new EuclideanUnit(8, 1, 4, ''),
            new EuclideanUnit(24, 9, 0, ''),
            new EuclideanUnit(8, 3, 2, '')
        ],


    },
    latinAmerica: {
        traditional:[
            new EuclideanUnit(3, 2, 0, 'Mexican Corn Dance'),
            new EuclideanUnit(4, 3, 0, 'Brazilian Baiaò Rhythm'),
            new EuclideanUnit(4, 3, 1, 'Flamenco Rhythm'),
            new EuclideanUnit(4, 3, 3, 'Brazilian Catarete Rhythm'),
            new EuclideanUnit(8, 3, 0, 'Cuban Tresillo'),
            new EuclideanUnit(8, 5, 0, 'Cuban Cinquillo'),
            new EuclideanUnit(8, 5, 2, 'Cuban Habanera'),
            new EuclideanUnit(8, 5, 6, 'Argentinian Tango'),
            new EuclideanUnit(12, 5, 2, 'Dominican Salve Pattern'),
            new EuclideanUnit(12, 5, 9, 'Cuban Columbia Pattern 1'),
            new EuclideanUnit(16, 5, 0, 'Brazilian Bossa Nova 1'),
            new EuclideanUnit(16, 5, 10, 'Brazilian Bossa Nova 2'),
            new EuclideanUnit(16, 5, 13, 'Brazilian Bossa Nova 3'),
            new EuclideanUnit(12, 7, 3, 'Cuban Columbia Pattern 2'),
            new EuclideanUnit(12, 7, 4, 'Caribbean Tambù'),
            new EuclideanUnit(16, 7, 0, 'Brazilian Samba 1'),
            new EuclideanUnit(16, 7, 2, 'Brazilian Samba 2'),
            new EuclideanUnit(16, 7, 10, 'Brazilian Partido Alto Rhythm'),
            new EuclideanUnit(16, 9, 0, 'Cuban Rumba Palitos Rhythm')
        ],
        init:[ // Lista iniziale dei parametri euclidiani MODE 1
            new EuclideanUnit(10, 4, 0, ''),
            new EuclideanUnit(8, 1, 4, ''),
            new EuclideanUnit(16, 5, 0, ''),
            new EuclideanUnit(8, 3, 2, '')
        ],


    },
}

 //setting EuclideanUnit.id
Object.keys(defaultUnits).forEach((environment) => { 
    Object.keys(defaultUnits[environment]).forEach((modality) => {
        defaultUnits[environment][modality] = defaultUnits[environment][modality].map((unit, ind) => {
            unit.setId(ind);
            return unit
        })
    })
})



export default defaultUnits
