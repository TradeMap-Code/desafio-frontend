import React from "react";
import stocks from "../../stocks.json";

const Home = () => {
  return (
    <div className='container'>
      <div className='card'>
        {stocks &&
          stocks.map((stock, id) => {
            return (
              <div key={id}>
                <h1>{stock.company}</h1>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Home;
