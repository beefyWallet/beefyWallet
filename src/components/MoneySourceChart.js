import React, { useContext } from "react";
import { Pie, defaults } from "react-chartjs-2";
import { ApiDataContext } from "../../src/context/apiData";

// defaults.global.tooltips.enabled = false;
// defaults.global.legend.position = "bottom";

const MoneySourceChart = () => {
  const { moneySourceData, transactionsData } = useContext(ApiDataContext);
  const categories = {};
  transactionsData.map((item) => {
    if (item.transaction_type == "Expenses") {
      categories[item.money_source.name]
        ? (categories[item.money_source.name] += item.value)
        : (categories[item.money_source.name] = item.value);
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

export default MoneySourceChart;
