import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Signin from "./pages/signin/Signin";

import Contactus from "./pages/contactus/Contactus";
import SettingProfile from "./pages/settingprofile/SettingProfile";
import SettingProfileCopy from "./pages/settingprofile/SettingProfileCopy";
import ForgetPassword from "./pages/forgetpassword/ForgetPassword";
import ChangePassword from "./pages/changepassword/ChangePassword";

const App = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/signin">
            <Signin />
          </Route>

          <Route exact path="/contactus">
            <Contactus />
          </Route>
          <Route exact path="/settingprofile">
            <SettingProfile />
          </Route>
          <Route exact path="/settingprofilecopy">
            <SettingProfileCopy />
          </Route>
          <Route exact path="/forgetpassword">
            <ForgetPassword />
          </Route>
          <Route exact path="/changepassword">
            <ChangePassword />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
