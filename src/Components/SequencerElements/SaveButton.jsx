
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
    <div className="save-cont tooltip">
      <button
        id="saveButton"
        className="save-button"
        onClick={() => saveLinesList()}

      ></button>
      {/* <span className="tooltiptext">Save the Euclidean Lines State</span> */}
      
    </div>
  );
};

export default SaveButton;
