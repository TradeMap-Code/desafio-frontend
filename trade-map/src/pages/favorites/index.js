import React from 'react';
import Chart from '../../components/Chart';
import { useSelector, useDispatch } from 'react-redux';

import './styles.css';
import StockFilter from '../../components/StockFilter';
const Favorites = () => {
  const stocks = useSelector((state) => state.stocks);
  const favourites = useSelector((state) => state.favourites);
  const priceOrder = useSelector((state) => state.priceOrder);
  const variationOrder = useSelector((state) => state.variationOrder);
  return (
    <div className="container">
      <h1>Favoritos</h1>
      <StockFilter stocks={favourites} page="favourites" />
      <div className="charts">
        {favourites.map((stock, id) => {
          return (
            <Chart
              key={id}
              company={stock.company}
              stock={stock.stock}
              country={stock.country}
              price={stock.price}
              variation={stock.variation}
              chart={stock.chart}
              chartLength={stock.chart.length}
            />
          );
        })}
        {favourites.length === 0 && (
          <div>
            <p>Não existe favoritos</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
