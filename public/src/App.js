import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Signin from "./pages/signin/Signin";
import Contactus from "./pages/contactus/Contactus";
import SettingProfile from "./pages/settingprofile/SettingProfile";
import SettingProfileCopy from "./pages/settingprofile/SettingProfileCopy";
import ForgetPassword from "./pages/forgetpassword/ForgetPassword";
import ChangePassword from "./pages/changepassword/ChangePassword";
import MainPage from "./pages/mainpage/MainPage";

const App = () => {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/mainpage">
            <MainPage />
          </Route>
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
    </div>
  );
};

export default App;
