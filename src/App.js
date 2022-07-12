import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Signin from "./pages/signin/Signin";
import Contactus from "./pages/contactus/Contactus";

const App = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/">
            <Signin />
          </Route>
          <Route path="/Contactus">
            <Contactus />
          </Route>
        </Switch>
      </div>

      <Link to="/"></Link>
      <Link to="/Contactus"></Link>
    </>
  );
};

export default App;
