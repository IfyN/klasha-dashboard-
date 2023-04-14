import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  redraw: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = ["20 Aug", "21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [2000, 4000, 3700, 2500, 1270, 3580],
      borderColor: "rgba(239, 44, 90)",
      backgroundColor: "rgba(239, 44, 90, 0.5)",  
    },
  ],
};



export function MaxChart() {
  return <Line options={options} data={data} />;
}
