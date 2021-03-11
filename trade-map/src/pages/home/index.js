import React from 'react';
import stocks from '../../stocks.json';
import Chart from '../../components/Chart';

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
              />
            );
          })}
      </div>
      <Chart />
    </div>
  );
};
export default Home;
