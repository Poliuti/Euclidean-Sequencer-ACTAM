import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "../Components/PageBasicComponents/SideBar";
import Environment from "./Environment";


const envNamesPath = [
  "custom",
  "africa",
  "latinAmerica",
  "europe",
  "asia"
];
const envNames = [
  "Custom",
  "Africa",
  "Latin America",
  "Europe",
  "Asia"
];


const Environments = ({urlPath}) => {
  
  const [userPresets, setUserPresets] = useState([]);
  

  return (
    <Router>
      <div className="environments">
        <SideBar basePath={urlPath}/>

        <Switch>
          {envNamesPath.map((environment, index) => {
            let address;
            if (environment === "custom") {address=urlPath}
            else {address=`${urlPath}/${environment}`}

      
            return (
              <Route exact path={address} key={index}>
                <Environment
                  userPresets= {userPresets} 
                  setUserPresets={setUserPresets}
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
