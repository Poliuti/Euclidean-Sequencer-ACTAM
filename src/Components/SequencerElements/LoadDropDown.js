import Dropdown from "react-dropdown";

const LoadDropDown = ({ userList, setLinesList }) => {
  let savedListNames;

  if (userList) {
    savedListNames = userList.map((linesList, id) => `User Lines List ${id}`);
  } else savedListNames = ["Failed"];

  const handleOnChange = (label) => {
    setLinesList(userList[label.slice(label.length - 1)]);
  };

  let value;
  if (!savedListNames[0]) {
    value = null;
  } else {
    value = "Select a User Pattern";
  }

  return (
    <div id="saved-dropdown">
      <Dropdown
        options={savedListNames}
        onChange={(e) => handleOnChange(e.label)}
        value={value}
        placeholder="Nothing Saved Yet"
      />
    </div>
  );
};

export default LoadDropDown;
