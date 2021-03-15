import React from 'react';
import Chart from '../../components/Chart';

import './styles.css';
import { useSelector, connect, useDispatch } from 'react-redux';
import { setPriceOrder, setVariationOrder } from '../../actions';
const Home = () => {
  const stocks = useSelector((state) => state.stocks);
  const priceOrder = useSelector((state) => state.priceOrder);
  const variationOrder = useSelector((state) => state.variationOrder);
  const dispatch = useDispatch();
  let filteredStocks = stocks;
  const addFavourites = (stock) => {
    dispatch(setPriceOrder(stock));
  };
  const removeFavourites = (stock) => {
    dispatch(setVariationOrder(stock));
  };

  const sortByPrice = () => {
    addFavourites('desc');
    return priceOrder === 'asc'
      ? (addFavourites('desc'),
        (filteredStocks = stocks.sort((a, b) => a.price - b.price)))
      : (addFavourites('asc'),
        (filteredStocks = stocks.sort((a, b) => b.price - a.price)));
  };

  const sortByVariation = () => {
    removeFavourites('desc');
    return variationOrder === 'asc'
      ? (removeFavourites('desc'),
        (filteredStocks = stocks.sort((a, b) => a.variation - b.variation)))
      : (removeFavourites('asc'),
        (filteredStocks = stocks.sort((a, b) => b.variation - a.variation)));
  };
  return (
    <div className="container">
      <div className="charts">
        <div className="chart-filter">
          {priceOrder === 'desc' ? (
            <h2 className="arrow" onClick={sortByPrice}>
              Price
            </h2>
          ) : (
            <h2 className="arrow" onClick={sortByPrice}>
              Price
            </h2>
          )}
          <h2>Performance</h2>

          {variationOrder === 'desc' ? (
            <h2 className="arrow" onClick={sortByVariation}>
              Variation
            </h2>
          ) : (
            <h2 className="arrow" onClick={sortByVariation}>
              Variation
            </h2>
          )}
        </div>

        {stocks &&
          stocks.map((stock, id) => {
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
      </div>
    </div>
  );
};

export default Home;
