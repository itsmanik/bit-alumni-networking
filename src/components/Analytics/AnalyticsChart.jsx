import React, { useEffect } from "react";
import { Line } from "react-chartjs-2"; // Importing the Line chart from Chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsChart = () => {
  // Mock data: Total alumni connections made over the last 12 months
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // Labels for the X-axis
    datasets: [
      {
        label: "Total Alumni Connections", // The label for the graph
        data: [20, 40, 60, 80, 120, 130, 160, 180, 220, 250, 290, 320], // The actual data values (example: alumni connections made each month)
        fill: false,
        borderColor: "#3A843A", // Line color
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "BIT Alumnus Connections Over Time", // Title for the chart
        font: { size: 18 },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw;
            return `${value} connections`; // Tooltip to show number of connections
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Start the y-axis at 0
      },
    },
  };

  return (
    <div
      className="analytics-container"
      style={{ width: "80%", margin: "0 auto", padding: "20px" }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default AnalyticsChart;
