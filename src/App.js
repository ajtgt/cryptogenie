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
import Signup from "./pages/signup/Signup";
import TrendPrediction from "./pages/trendprediction/TrendPrediction";
import ComingSoon from "./pages/comingsoon/ComingSoon";
import DontLogIn from "./pages/dontlogin/DontLogIn";
import UpgradePlan from "./pages/upgradeplan/UpgradePlan";
import ProfilePage from "./pages/profilepage/ProfilePage";
import Yantraka from "./pages/yantraka/Yantraka";

const App = () => {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/">
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
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/trendprediction">
            <TrendPrediction />
          </Route>
          <Route exact path="/comingsoon">
            <ComingSoon />
          </Route>
          <Route exact path="/dontlogin">
            <DontLogIn />
          </Route>
          <Route exact path="/upgradeplan">
            <UpgradePlan />
          </Route>
          <Route exact path="/profilepage">
            <ProfilePage />
          </Route>
          <Route exact path="/yantraka">
            <Yantraka />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
