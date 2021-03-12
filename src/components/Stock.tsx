import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../redux/modules/state/types';

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
  
  const dispatch = useDispatch();
  const favoritesStocks = useSelector((state: State) => state.favoritesStocks);

  function handleAddStockToFavorites() {
    dispatch({
      type: 'ADD_STOCK_TO_FAVORITES',
      payload: stock
    });
  }

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

      <Button disabled={favoritesStocks.includes(stock)} onClick={handleAddStockToFavorites}>
        Favoritar
        {favoritesStocks.includes(stock) ? <AiFillHeart /> : <AiOutlineHeart />}
      </Button>
    </div>
  );
};

export default Stock;