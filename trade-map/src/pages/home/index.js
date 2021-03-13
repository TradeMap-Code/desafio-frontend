import React from 'react';
import stocks from '../../stocks.json';
import Chart from '../../components/Chart';

import './styles.css';
const Home = () => {
  return (
    <div className="container">
      <div className="charts">
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
