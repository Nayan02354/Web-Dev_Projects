import React, { useState } from "react";

import Sidebar from "../../components/User_Dashboard/Sidebar";
import settings from "../../components/User_Dashboard/Settings";
import Overview from "../../components/User_Dashboard/Overview";
import WishList from "../../components/User_Dashboard/WishList";
import Orders from "../../components/User_Dashboard/Orders";

const UserDashboard = () => {
  const [active, setActive] = useState("Overview");

  return (
    <>
      <div className="flex h-[92vh]">
        <div className="w-1/6 border border-red-500 h-full">
          <Sidebar active={active} setActive={setActive} />
        </div>
        <div className="w-5/6 border border-green-500 h-full">
          {active === "Overview" && <Overview />}
          {active === "Orders" && <Orders />}
          {active === "WishList" && <WishList />}
          {active === "Settings" && <Settings />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
