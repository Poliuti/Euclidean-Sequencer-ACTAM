import "./../../Styles/App.css";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import Environments from "../../Environments/Environments";





function App() {

  

  

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/">
              <Environments />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
