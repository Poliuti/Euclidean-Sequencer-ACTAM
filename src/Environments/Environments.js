import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Custom from "./Custom";
import Africa from "./Africa";
import SouthAmerica from "./SouthAmerica";
import MiddleEast from "./MiddleEast";
import India from "./India";
import RestOfWorld from "./RestOfWorld";
import SideBar from "../Components/PageBasicComponents/SideBar";
import Environment from "./Environment";



const Environments = () => {

  const envNamesPath = ["custom", "africa", "southAmerica", "middleEast", "india", "restOfTheWorld"];
  const envNames = ["Custom", "Africa", "South America", "Middle East", "India", "Rest Of The World"];
  

  return (
    <Router>
      <div className="environments">
        <SideBar />

        <Switch>
          {envNamesPath.map((environment, index) => {
            const address = `/environments/${environment}`
            return (
              <Route exact path= {address}>
                <Environment envName={envNames[index]} num={index} envNamePath = {environment} />
              </Route>
            );
          })}
          {/* <Route exact path="/environments/custom">
            <Custom />
          </Route>

          <Route exact path="/environments/africa">
            <Africa />
          </Route>

          <Route exact path="/environments/southamerica">
            <SouthAmerica />
          </Route>

          <Route exact path="/environments/middleeast">
            <MiddleEast />
          </Route>

          <Route exact path="/environments/india">
            <India />
          </Route>

          <Route exact path="/environments/rest">
            <RestOfWorld />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
};

export default Environments;
