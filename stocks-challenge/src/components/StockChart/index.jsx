import React from "react";
import { useSelector } from 'react-redux';

import { Chart } from 'react-charts';

import styles from "./style.module.css";

function StockChart() {
  const visualizeStock = useSelector(state => state.visualize);

  const chartData = new Array();

  for (const index in visualizeStock.chart) {
    const element = visualizeStock.chart[index];
    chartData.push({ x: index, y: element })
  }

  const data = React.useMemo(
    () => [
      {
        label: visualizeStock.stock,
        data: chartData
      }
    ],
    [chartData]
  )

  const series = React.useMemo(
    () => ({
      showPoints: false,
      type: "area"
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      {
        primary: true,
        position: 'bottom',
        type: 'linear',
        show: false
      },
      {
        secondary: true,
        position: 'left',
        type: 'linear',
        show: false
      }
    ],
    []
  )

  return (
    <>
      <div className={styles.stock_information}>
        <div>
          <p className={styles.stock_name}>{visualizeStock.company}</p>
          <p className={styles.stock__stock}>{visualizeStock.stock}</p>
        </div>
        <div>
          <p className={styles.stock__price}>{visualizeStock.price ? `R$ ${visualizeStock.price.toFixed(2).replace('.', ',')}` : ""}</p>
          <p className={(visualizeStock.variation < 0 ? styles.stock__variation_negative : styles.stock__variation_positive)}>
            {visualizeStock.variation ? `${visualizeStock.variation.toFixed(2).replace('.', ',')}%` : ""}
          </p>
        </div>
      </div>

      <div className={styles.stock_chart}>
        <Chart data={data} series={series} axes={axes} tooltip />
      </div>
    </>
  );
}

export default StockChart;
