import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Custom from "./Custom";
import Africa from "./Africa";
import SouthAmerica from "./SouthAmerica";
import MiddleEast from "./MiddleEast";
import India from "./India";
import RestOfWorld from "./RestOfWorld";
import SideBar from "../Components/PageBasicComponents/SideBar";

const Environments = () => {
  return (
    <Router>
      <div className="environments">
        <SideBar />

        <Switch>
          <Route exact path="/environments/custom">
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
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Environments;
