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

const App = () => {
  return (
    <div>
      <Route exact path="/" component={SettingProfileCopy}></Route>
    </div>
  );
};

export default App;
