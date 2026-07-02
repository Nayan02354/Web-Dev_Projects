import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "./Sidebar";

const User_Dashboard = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="flex h-{92vh">
        <div className="w-1/6 border border-red-500 h-full">Sidebar</div>
        <Sidebar />
        
        <div className="w-5/6 border border-green-500 h-full">Sidebar</div>
      </div>
    </>
  );
};

export default settings;
