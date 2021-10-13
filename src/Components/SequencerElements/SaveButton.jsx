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
  };


  
  return (
    <div className="save-cont">
      <button
        id="saveButton"
        className="save-button"
        onClick={saveLinesList}

      ></button>
      
      
    </div>
  );
};

export default SaveButton;
