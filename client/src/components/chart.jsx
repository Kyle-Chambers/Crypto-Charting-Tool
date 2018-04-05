import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

class Chart extends React.Component {
  render() {
    let labels = this.props.chartData.map(item => {
      console.log(item);
      return moment(item[0]).format("dddd, MMMM Do YYYY"); 
    });

    let data = this.props.chartData.map(item => {
      return item[1];
    });

    const chartData = {
      labels: labels,
      datasets: [
        {
          label: "Bitcoin Price Index",
          fill: false,
          lineTension: 0.2,
          backgroundColor: "blue",
          borderColor: "blue",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "blue",
          pointBackgroundColor: "white",
          pointBorderWidth: 2,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
          data: data
        }
      ]
    };

    return (
      <div className="chart">
        <Line data={chartData} />
      </div>
    );
  }
}

export default Chart;
