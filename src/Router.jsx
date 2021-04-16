import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wilders from "./pages/Wilders";
import AddWilders from "./pages/AddWilders";
import WildersContext from "./context/WildersContext";

function Router() {
  return (
    <div className="w-full h-full">
      <BrowserRouter>
        <WildersContext.Provider value={{}}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/wilders">
              <Wilders />
            </Route>
            <Route exact path="/addwilders">
              <AddWilders />
            </Route>
          </Switch>
        </WildersContext.Provider>
      </BrowserRouter>
    </div>
  );
}
export default Router;
