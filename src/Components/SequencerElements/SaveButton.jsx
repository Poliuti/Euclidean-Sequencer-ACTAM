const SaveButton = ({setUserPatternsList, linesList, userPatternsList}) => {

    let prova = [];
    
    

const handleOnClick = () => {
    
    
    if (userPatternsList == null){
        prova.push(linesList);
        setUserPatternsList(prova);
}
    
    else
    { 
        let tempUserPatternsList = [...userPatternsList];
        tempUserPatternsList.push(linesList);
    setUserPatternsList(tempUserPatternsList);}
}
    

    return ( <div className="save-cont">
        <button className="save-button" onClick={handleOnClick} >
            Save Patterns
        </button>
    </div> );
}
 
export default SaveButton;