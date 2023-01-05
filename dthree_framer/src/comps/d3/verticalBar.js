import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Nigeria global gdp rankings",
    },
  },
};

const labels = [
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
];

const data = {
  labels,
  datasets: [
    {
      label: "Nigeria global gdp rankings",
      data: [52, 47, 38, 37, 34, 31, 31, 30, 23, 20, 21, 22, 23],
      backgroundColor: [
        "beige",
        "bluevoilet",
        "gray",
        "orange",
        "red",
        "purple",
      ],
      borderColor: "black",
      borderWidth: 1,
    },
  ],
};
export const VerticalBar = () => {
  return <Bar options={options} data={data} />;
};
