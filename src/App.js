import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import MainPage from "./pages/mainpage/MainPage";
import Yantraka from "./pages/yantraka/Yantraka";
import TrendPrediction from "./pages/trendprediction/TrendPrediction";
import ComingSoon from "./pages/comingsoon/ComingSoon";
import DontLogIn from "./pages/dontlogin/DontLogIn";
import UpGradePlan from "./pages/upgradeplan/UpGradePlan";
import CryptoProfilePage from "./pages/cryptoprofilepage/CryptoProfilePage";
import SignUp from "./pages/signup/SignUp";

import MainPageCryptoGenie from "./assets/MainPageCryptoGenie";
import SignIn from "./pages/signin/SignIn";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/mainpage">
          <MainPage />
        </Route>
        <Route exact path="/mainpagecryptogenie">
          <MainPageCryptoGenie />
        </Route>
        <Route exact path="/yantraka">
          <Yantraka />
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
          <UpGradePlan />
        </Route>
        <Route exact path="/cryptoprofilepage">
          <CryptoProfilePage />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        {/* <Route exact path="/signin">
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
        </Route> */}
      </Switch>
    </div>
  );
};

export default App;
