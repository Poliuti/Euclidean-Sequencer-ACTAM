import api from "../../api/userUnitList";

const SaveButton = ({ currentUnitList, userList, setUserList, tempo }) => {
  const saveUnitList = async () => {
    const request = { unitList: currentUnitList, tempo: tempo };
    const response = await api.post("/userUnitList", request);

    if (!userList) {
      setUserList(response.data);
    } else setUserList([...userList, response.data]);
  };

  return (
    <div className="save-cont">
      <button
        id="saveButton"
        className="save-button"
        onClick={saveUnitList}
      ></button>
    </div>
  );
};

export default SaveButton;
