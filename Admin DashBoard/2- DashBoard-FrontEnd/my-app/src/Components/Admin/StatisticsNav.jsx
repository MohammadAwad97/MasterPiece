/* eslint-disable no-unused-vars */
import React from "react";
import "./StatisticsNav.css";


function StatisticsNav() {
  return <div className="topNav">
    <div className="oneStatis">
    <div className="fontIcon">
    <i className="fa-solid fa-user"></i>
    </div>
    <div className="statis_Datails">
      <p>registered users</p>
      <h2 className="text-2xl">100</h2>
    </div>
    </div>
    <div className="oneStatis">
    <div className="fontIcon" style={{background: "#23baa6"}}>
    <i className="fa-solid fa-store"></i>
    </div>
    <div className="statis_Datails">
      <p>registered users</p>
      <h2 className="text-2xl">20</h2>
    </div>
    </div>
    <div className="oneStatis">
    <div className="fontIcon" style={{background :"#ffc144"}}>
    <i className="fa-solid fa-cart-shopping"></i>
    </div>
    <div className="statis_Datails">
      <p>Satisfication Rate</p>
      <h2 className="text-2xl">95%</h2>
    </div>
    </div>
  </div>;
}

export default StatisticsNav;
