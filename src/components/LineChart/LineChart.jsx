import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["mon", "tue", "wed", "thur", "fri", "sat", "sun"],
  datasets: [
    {
      label: "hours",
      data: [0, 1.5, 2.5, 1, 4, 3, 2],
      fill: false,
      backgroundColor: "rgb(0, 0, 0)",
      borderColor: "rgba(0, 0, 0)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
    display: true,
  },
};

const LineChart = () => <Line data={data} options={options} />;

export default LineChart;
