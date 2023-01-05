import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  return (
    <div>
      <Pie
        data={{
          labels: [
            "Cereals; 28,67",
            "vegetables; 15,71",
            "Rice paddy; 8,17",
            "Oil Crops; 4,04",
            "Citrus fruit; 3,98",
            "Roots and Tubers; 118,33",
          ],
          datasets: [
            {
              label: "FoodStuff production of Nigeria 2020, in million tonnes",
              data: [16, 9, 17.5, 2, 2, 66],
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
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Chart;
