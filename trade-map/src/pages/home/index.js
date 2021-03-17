import React from 'react';
import Chart from '../../components/Chart';

import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPriceOrder, setVariationOrder } from '../../actions';
import StockFilter from '../../components/StockFilter';
const Home = () => {
  const stocks = useSelector((state) => state.stocks);
  const priceOrder = useSelector((state) => state.priceOrder);
  const variationOrder = useSelector((state) => state.variationOrder);
  console.log('home', stocks);
  return (
    <div className="container">
      <div className="charts">
        <StockFilter stocks={stocks} page="home" />
        {!!stocks &&
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
