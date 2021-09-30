import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "../Components/PageBasicComponents/SideBar";
import Environment from "./Environment";


const envNamesPath = [
  "custom",
  "africa",
  "southAmerica",
  "middleEast",
  "india",
  "restOfTheWorld",
];
const envNames = [
  "Custom",
  "Africa",
  "South America",
  "Middle East",
  "India",
  "Rest Of The World",
];


const Environments = () => {
  

  return (
    <Router>
      <div className="environments">
        <SideBar />

        <Switch>
          {envNamesPath.map((environment, index) => {
            let address;
            if (environment === "custom") {address='/'}
            else {address=`/${environment}`}

      
            return (
              <Route exact path={address} key={index}>
                <Environment
                  envName={envNames[index]}
                  num={index}
                  envNamePath={environment}
                />
              </Route>
            );
          })}
        </Switch>
      </div>
    </Router>
  );
};

export default Environments;
