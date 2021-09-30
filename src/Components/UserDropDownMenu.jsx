import Dropdown from "react-dropdown";
/* import "./../../node_modules/react-dropdown/style.css"; */

const UserDropDownMenu = ({ choiceOptions }) => {
  console.log("choiceOptions ");
  console.log(choiceOptions);
  let placeholder;
  if (choiceOptions) placeholder = "Select a Euclidean Pattern";
  else placeholder = "No User Patterns Saved Yet";

  console.log(placeholder);

  const handleOnChange = () => {
    console.log("ciao");
  };
  return (
    <div className="user-dropdown-menu">
      <Dropdown
        options={choiceOptions}
        onChange={() => handleOnChange()}
        value={choiceOptions[0]}
        placeholder={placeholder}
      />
    </div>
  );
};

export default UserDropDownMenu;
