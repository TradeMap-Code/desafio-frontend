import React from 'react';
import { Line } from '@reactchartjs/react-chart.js';
import { addToFavourites, removeFromFavourites } from '../../actions';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';

const getStockData = (stock, n) => ({
  labels: [...Array(n).keys()],
  datasets: [
    {
      label: '',
      data: stock,
      fill: true,
      backgroundColor: 'rgb(110, 110, 132)',
      borderColor: 'rgba(110, 110, 132, 0.2)',
      pointRadius: 0,
    },
  ],
});

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: false,
        },
        display: false,
      },
    ],
    xAxes: [{ display: false }],
  },
  legend: false,
};

const setVariationClass = (variation) => {
  const defaultClass = 'stock-variation';
  return variation < 0 ? `${defaultClass} down` : `${defaultClass} up`;
};

const Chart = ({
  id,
  company,
  stock,
  country,
  price,
  variation,
  chart,
  chartLength,
}) => {
  const favourites = useSelector((state) => state.favourites);
  const stocks = useSelector((state) => state.stocks);
  const isFavourited = ({ stock }) => favourites.includes(stock);
  console.log('FFFF:', favourites);
  console.log(stocks.map((stock) => stock));
  return (
    <div className="chart-container">
      <div key={id}>
        <div className="chart-header">
          <h1>{company}</h1>
          {stocks.map((item) => {
            <div>
              {isFavourited(item) ? (
                <button onClick={useDispatch(removeFromFavourites(item))}>
                  Remove from favourites
                </button>
              ) : (
                <button onClick={useDispatch(addToFavourites(item))}>
                  Add to favourites
                </button>
              )}
            </div>;
          })}
        </div>

        <div className={setVariationClass(variation)}>
          <p>Variação</p>
          <h1>{variation}</h1>
        </div>
        <div>
          <h3>{stock}</h3> <h3>{country}</h3>
        </div>
        <div className="stock-chart">
          <Line data={getStockData(chart, chartLength)} options={options} />
        </div>
        <div>
          <p>Preço</p>
          <h1>{price}</h1>
        </div>
      </div>
    </div>
  );
};

export default Chart;
