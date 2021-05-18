import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Custom from "./Environments/Custom";
import Africa from "./Environments/Africa";
import SouthAmerica from "./Environments/SouthAmerica";
import MiddleEast from "./Environments/MiddleEast";
import India from "./Environments/India";
import RestOfWorld from "./Environments/RestOfWorld";
import SideBar from "./SideBar";


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
