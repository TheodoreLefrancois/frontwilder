import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Wilders from "./pages/Wilders";
import AddWilders from "./pages/AddWilders";
import WildersContext from "./context/WildersContext";
import { useEffect, useState } from "react";

function Router() {
  const [wilders, setWilders] = useState(null);
  const getDatas = async () => {
    const {
      data: { result },
    } = await axios.get("http://localhost:5000/api/wilder/read");
    console.log(result);
    setWilders([...result]);
  };

  const removeWilder = async (id) => {
    try {
      const data = await axios.delete(
        `http://localhost:5000/api/wilder/delete/${id}`
      );
      if (data) getDatas();
    } catch (err) {
      console.log(err);
    }
  };
  const addWilder = async ({ ...wilderDatas }) => {
    try {
      const {
        data: { result },
      } = await axios.post("http://localhost:5000/api/wilder/create", {
        ...wilderDatas,
      });
      if (result) {
        console.log(result);
        getDatas();
        return "it Worked";
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getDatas();
  }, []);
  return (
    <div className="w-full h-full">
      <BrowserRouter>
        <WildersContext.Provider
          value={{ wilders, getDatas, removeWilder, addWilder }}
        >
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
