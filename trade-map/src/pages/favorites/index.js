import React from 'react';
import Chart from '../../components/Chart';
import { useSelector, useDispatch } from 'react-redux';

import './styles.css';
import { setPriceOrder, setVariationOrder } from '../../actions';
const Favorites = () => {
  const stocks = useSelector((state) => state.stocks);
  const favourites = useSelector((state) => state.favourites);
  console.log(favourites);
  return (
    <div className="container">
      <h1>Favoritos</h1>
      {stocks
        .filter((item) => favourites.indexOf(item.stock) !== -1)
        .map((stock, id) => {
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
  );
};

export default Favorites;
