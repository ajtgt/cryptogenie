import { React, useState, useEffect } from "react";
import PricingCards from "./PricingCards";
import PricingCard from "./PricingCard";
import monthlyData from "../pages/settingpage/monthlyData.json";
import annualData from "../pages/settingpage/annualData.json";

import axios from "axios";
import { useSelector } from "react-redux";

const UpgradePlan = () => {
  const token = useSelector((state) => state.user.token);
  const [user, setUser] = useState([]);

  const url =
    "https://rx03iubpad.execute-api.us-east-2.amazonaws.com/test/v1/plans";

  const config = {
    headers: {
      Authorization: token,
    },
  };

  async function fetchUserData() {
    const request = await axios.get(url, config);
    setUser(request.data);

    return request;
  }

  useEffect(() => {
    fetchUserData();
    console.log(user);
  }, []);

  console.log("create session data", user[1]?.prices[0]?.id);

  return (
    <div>
      <div class="container mt-3 mb-5">
        <ul class="nav justify-content-center nav-pills mb-3 " role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="pill" href="#monthly">
              Monthly
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="pill" href="#annual">
              Annual
            </a>
          </li>
        </ul>

        <div class="tab-content">
          <div id="monthly" class="d-flex flex-row container tab-pane active">
            {/* <PricingCards data={monthlyData[0]} user={user[1]?.prices[0]?.id} />
            <PricingCards data={monthlyData[1]} user={user[2]?.prices[0]?.id} />
            <PricingCards data={monthlyData[2]} user={user[1]?.prices[0]?.id} />
            <PricingCards data={monthlyData[3]} user={user[2]?.prices[0]?.id} /> */}
            <PricingCard data={monthlyData[0]} user={user[1]?.prices[0]?.id} />
            <PricingCard data={monthlyData[1]} user={user[2]?.prices[0]?.id} />
            <PricingCard data={monthlyData[2]} user={user[1]?.prices[0]?.id} />
            <PricingCards data={monthlyData[3]} user={user[2]?.prices[0]?.id} />
          </div>
          <div id="annual" class="d-flex flex-row container tab-pane fade">
            <br />
            {/* <PricingCards data={annualData[0]} user={user[1]?.prices[0]?.id} />
            <PricingCards data={annualData[1]} user={user[2]?.prices[0]?.id} />
            <PricingCards data={annualData[2]} user={user[1]?.prices[0]?.id} />
            <PricingCards data={annualData[3]} user={user[2]?.prices[0]?.id} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradePlan;
