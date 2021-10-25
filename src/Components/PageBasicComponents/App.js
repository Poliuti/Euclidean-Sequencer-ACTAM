import "./../../Styles/App.css";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import Environments from "../../Environments/Environments";






function App() {
  const basePath = "/euclidean-sequencer";
  
  
  

  

  return (
  
    
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/euclidean-sequencer">
              <Environments urlPath={basePath} />
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
