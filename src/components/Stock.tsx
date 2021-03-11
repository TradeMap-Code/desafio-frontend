import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import styles from '../styles/components/Stock.module.css'
import Button from './Button';
import Chart from './Chart';

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
      
      <strong>{`${stock} - ${company}`}</strong>

      <div className={styles.chart}>
        <Chart chart={chart} stock={stock} price={price} variation={variation} />
      </div>

      <div className={styles.data}>
        <div>
          <p>Exchange: {exchange}</p>
          <p>country: {country}</p>
        </div>
      </div>


      <Button>
        Favoritar
        <AiOutlineHeart />
      </Button>
    </div>
  );
};

export default Stock;