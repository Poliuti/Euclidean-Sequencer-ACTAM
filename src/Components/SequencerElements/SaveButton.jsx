

const SaveButton = ({ currentUnitList, userPresets, setUserPresets, tempo }) => {
  const saveUnitList = async () => {
    const request = { unitList: currentUnitList, tempo: tempo };
    

    if (!userPresets) {
      setUserPresets(request);
    } else setUserPresets([...userPresets, request]);
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
