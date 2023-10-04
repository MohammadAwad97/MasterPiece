/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Chart from "react-apexcharts";
import { usersData } from "./Data";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: usersData.map((el) => el.month),
        },
      },
      series: [
        {
          name: "series-1",
          data: usersData.map((el) => el.usersRegistered),
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height="400"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
