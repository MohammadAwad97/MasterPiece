/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./StatisticsNav.css";
import axios from "axios";

function StatisticsNav() {
  const [usersNumber, setUsersNumber] = useState([]);
  const [storesNumber, setStoresNumber] = useState([]);

  //Get all users count:
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:3000/api/v1/users`);
      setUsersNumber(response.data.count);
    } catch (err) {
      console.log(err);
    }
  };

  //Get all stores:
  const fetchDataStores = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:3000/api/v1/stores`);
      console.log(response.data.results);
      setStoresNumber(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    fetchDataStores();
  }, []);

  return (
    <div className="topNav">
      <div className="oneStatis">
        <div className="fontIcon">
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="statis_Datails">
          <p>registered users</p>
          <h2 className="text-2xl">{usersNumber}</h2>
        </div>
      </div>
      <div className="oneStatis">
        <div className="fontIcon" style={{ background: "#23baa6" }}>
          <i className="fa-solid fa-store"></i>
        </div>
        <div className="statis_Datails">
          <p>registered stores</p>
          <h2 className="text-2xl">{storesNumber}</h2>
        </div>
      </div>
      <div className="oneStatis">
        <div className="fontIcon" style={{ background: "#ffc144" }}>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="statis_Datails">
          <p>Satisfication Rate</p>
          <h2 className="text-2xl">95%</h2>
        </div>
      </div>
    </div>
  );
}

export default StatisticsNav;
