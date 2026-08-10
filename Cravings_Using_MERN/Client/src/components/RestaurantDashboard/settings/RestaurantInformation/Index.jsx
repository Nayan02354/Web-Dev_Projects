import React from "react";
import PersonalInformation from "./PersonalInformation";
import LeagalInformation from "./LegalInformation";
import RestaurantInformation from "./RestaurantInfo";

const Index = () => {
  return (
    <>
      <div className="overflow-y-auto h-full p-2 space-y-2">
        <PresonalInformation />
        <RestaurantInfo />
        <LeagalInformation />
      </div>
    </>
  );
};

export default Index;
