import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";

import "./App.css";

import LandingPage from "./pages/landingpage/LandingPage";

import MainPage from "./pages/mainpage/MainPage";
import Yantraka from "./pages/yantraka/Yantraka";

import TrendPrediction1 from "./pages/trendprediction/TrendPrediction1";
import ComingSoon from "./pages/comingsoon/ComingSoon";
import DontLogIn from "./pages/dontlogin/DontLogIn";
import UpGradePlan from "./pages/upgradeplan/UpGradePlan";
import CryptoProfilePage from "./pages/cryptoprofilepage/CryptoProfilePage";
import SignUp from "./pages/signup/SignUp";

import SignIn from "./pages/signin/SignIn";
import SettingPage from "./pages/settingpage/SettingPage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home">
          <LandingPage />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/mainpage">
          <MainPage />
        </Route>
        <Route exact path="/settingpage">
          <SettingPage />
        </Route>

        <Route exact path="/yantraka">
          <Yantraka />
        </Route>

        <Route exact path="/trendprediction1">
          <TrendPrediction1 />
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
      </Switch>
    </div>
  );
};

export default App;
