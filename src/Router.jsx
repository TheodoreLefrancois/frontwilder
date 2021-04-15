import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wilders from "./pages/Wilders";
import AddWilders from "./pages/AddWilders";

function Router() {
  return (
    <div className="w-full h-full">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}
export default Router;
