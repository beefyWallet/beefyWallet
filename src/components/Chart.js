import React, { useContext } from "react";
import { Pie, defaults } from "react-chartjs-2";
import { ApiDataContext } from "../../src/context/apiData";

// defaults.global.tooltips.enabled = false;
// defaults.global.legend.position = "bottom";
defaults.animation = false;
const BarChart = () => {
  const { moneySourceData, transactionsData } = useContext(ApiDataContext);
  const categories = {};
  transactionsData.map((item) => {
    if (item.transaction_type == "Expenses") {
      categories[item.category]
        ? (categories[item.category] += item.value)
        : (categories[item.category] = item.value);
    }
  });
  return (
    <div>
      <Pie
        data={{
          labels: Object.keys(categories),
          datasets: [
            {
              label: "Expense Structre",
              data: Object.values(categories),
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 159, 64, 0.6)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={250}
        width={250}
        options={{
          maintainAspectRatio: false,
          // scales: {
          //   yAxes: [
          //     {
          //       ticks: {
          //         beginAtZero: true,
          //       },
          //     },
          //   ],
          // },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;

// import React from "react";
// import { Pie } from "react-chartjs-2";
// import useStyles from "../../useStyle";
// const data = {
//   labels: ["Red", "Blue", "Yellow"],
//   datasets: [
//     {
//       data: [300, 50, 100],
//       backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//       hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//     },
//   ],
// };
// function randomColors(items) {
//   const colorslist = [];
//   items.forEach((element) => {
//     const random = Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .toUpperCase();
//     const color = `#${random}`;
//     colorslist.push(color);
//   });
//   return colorslist;
// }
//
// export default function PieChart({ transactionsData }) {
//   const categories = {};
//   transactionsData.map((item) => {
//     categories[item.category]
//       ? (categories[item.category] += 1)
//       : (categories[item.category] = 1);
//   });
//
//   const colorsList = randomColors(Object.keys(categories));
//   const classes = useStyles();
//   return (
//     <>
//       <Pie
//         data={{
//           labels: Object.keys(categories),
//           datasets: [
//             {
//               data: Object.values(categories),
//               backgroundColor: colorsList,
//               hoverBackgroundColor: colorsList,
//             },
//           ],
//         }}
//         width={20}
//         height={20}
//       />
//     </>
//   );
// }
