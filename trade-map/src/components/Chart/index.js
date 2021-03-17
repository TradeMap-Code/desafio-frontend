import React, { useEffect } from 'react';
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
      backgroundColor: 'black',
      borderColor: '#1E90FF',
      pointRadius: 1,
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
  const dispatch = useDispatch();
  const isFavourited = (stock) =>
    favourites.map((item) => item.stock).some((item) => item === stock);
  const addFavourites = () => {
    dispatch(addToFavourites(stock));
  };
  const removeFavourites = () => {
    dispatch(removeFromFavourites(stock));
  };

  return (
    <div className="chart-container">
      <div key={id}>
        <div className="chart-header">
          <h1>{company}</h1>

          {isFavourited(stock) ? (
            <span className="favorite pointer" onClick={removeFavourites}>
              <i className="fas fa-star"></i>
            </span>
          ) : (
            <span className="pointer" onClick={addFavourites}>
              <i className="far fa-star"></i>
            </span>
          )}
        </div>
        <div className="stock">
          <h3>{stock}</h3> <h3>({country})</h3>
        </div>
        <div className={setVariationClass(variation)}>
          <h1>{variation}</h1>
          {variation > 0 ? (
            <span>
              <i className="fas fa-arrow-up"></i>
            </span>
          ) : (
            <span>
              <i className="fas fa-arrow-down"></i>
            </span>
          )}
        </div>

        <div className="stock-chart">
          <Line data={getStockData(chart, chartLength)} options={options} />
        </div>
        <div className="price">
          <p>Preço</p>
          <h1>{price} R$</h1>
        </div>
      </div>
    </div>
  );
};

export default Chart;
