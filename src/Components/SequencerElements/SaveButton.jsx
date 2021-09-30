import api from "./../../api/userLinesList";

const SaveButton = ({ actualLinesList, userList, setUserList }) => {
  const saveLinesList = async () => {

    const request = 
      [...actualLinesList]
    ;

    const response = await api.post("/userLinesList", request);

    if (!userList){setUserList(response.data)}
    else
    setUserList([...userList, response.data]);




    /* if (userPatternsList == null){
        prova.push(linesList);
        setUserPatternsList(prova);
}
    
    else
    { 
        let tempUserPatternsList = [...userPatternsList];
        tempUserPatternsList.push(linesList);
    setUserPatternsList(tempUserPatternsList);} */
  };

  return (
    <div className="save-cont">
      <button
        className="save-button"
        onClick={() => saveLinesList()}
      >
      </button>
    </div>
  );
};

export default SaveButton;
