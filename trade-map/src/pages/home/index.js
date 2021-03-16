import React from 'react';
import Chart from '../../components/Chart';

import './styles.css';
import { useSelector } from 'react-redux';
import StockFilter from '../../components/StockFilter';
const Home = () => {
  const stocks = useSelector((state) => state.stocks);
  return (
    <div className="container">
      <div className="charts">
        <StockFilter />

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
