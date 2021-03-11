import React from 'react';

import styles from '../styles/components/Stock.module.css'

type StockProps = {
  stock: string;
  exchange: string;
  country: string;
  company: string;
  variation: number;
  price: number;
  chart: number[];
}

const Stock: React.FC<StockProps> = ({ chart, country, company, exchange, price, stock, variation }) => {
  return (
    <div className={styles.container}>
      <div>
        <strong>{`${stock} - ${company}`}</strong>
        <div>
          <p>Exchange: {exchange}</p>
          <p>country: {country}</p>
        </div>

        <div>
          <p>price: {price}</p>
          <p>variation: {variation}</p>
        </div>
      </div>

      <div className={styles.chart}>
        chart
      </div>


      <div className={styles.favorites}>
        favorites
      </div>
    </div>
  );
};

export default Stock;