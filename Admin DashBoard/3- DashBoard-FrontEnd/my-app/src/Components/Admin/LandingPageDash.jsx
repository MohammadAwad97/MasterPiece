// import React from 'react';
// import { useState } from "react";
import StatisticsNav from "./StatisticsNav";
import BarChart from "./BarChart";




function LandingPageDash() {
  return (
    <div className="flex flex-col flex-grow w-full">
      <StatisticsNav />
      <BarChart/>
    </div>
  );
}

export default LandingPageDash;
