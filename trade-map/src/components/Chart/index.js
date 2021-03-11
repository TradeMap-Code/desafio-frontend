import React from 'react';

const Chart = ({ id, company, stock, country, price, variation }) => {
  return (
    <div className="chart-container">
      <div key={id}>
        <h1>{company}</h1>
        <div>
          <h3>{stock}</h3> <h3>{country}</h3>
        </div>
        <div>
          <h1>Grafico</h1>
        </div>
        <div>
          <p>Preço</p>
          <h1>{price}</h1>
        </div>
        <div>
          <p>Variação</p>
          <h1>{variation}</h1>
        </div>
      </div>
    </div>
  );
};

export default Chart;
