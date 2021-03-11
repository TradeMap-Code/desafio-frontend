import React, { useEffect, useState } from 'react';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import Button from '../components/Button';
import Header from '../components/Header';
import Stock from '../components/Stock';

import Stocks from '../data/stocks.json';
import styles from '../styles/pages/List.module.css';

type StockTypes = {
  stock: string;
  exchange: string;
  country: string;
  company: string;
  variation: number;
  price: number;
  chart: number[];
}

const List: React.FC = () => {

  const [stocks, setStocks] = useState<StockTypes[]>(Stocks);
  const [priceOrderInverse, setPriceOrderInverse] = useState(false);
  const [variationOrderInverse, setVariationOrderInverse] = useState(false);

  function handlePriceOrder(inverse: boolean) {
    if(inverse) {
      const sortedStocks = stocks.sort((stockA, stockB) => stockB.price - stockA.price);
      setStocks(sortedStocks);
      setPriceOrderInverse(true);
    } else {
      const sortedStocks = stocks.sort((stockA, stockB) => stockA.price - stockB.price);
      setStocks(sortedStocks);
      setPriceOrderInverse(false);
    }
  }

  function handleVariationOrder(inverse: boolean) {
    if(inverse) {
      const sortedStocks = stocks.sort((stockA, stockB) => stockB.variation - stockA.variation);
      setStocks(sortedStocks);
      setVariationOrderInverse(true);
    } else {
      const sortedStocks = stocks.sort((stockA, stockB) => stockA.variation - stockB.variation);
      setStocks(sortedStocks);
      setVariationOrderInverse(false);
    }
  }

  return (
    <div className={styles.container}>
      <Header />
      
      <div className={styles.orderButtons}>
        <Button onClick={() => handlePriceOrder(!priceOrderInverse)}>
          Ordenar Preço
          {priceOrderInverse ? <FiArrowDown /> : <FiArrowUp />}
        </Button>


        <Button onClick={() => handleVariationOrder(!variationOrderInverse)}>
          Ordenar Variação
          {variationOrderInverse ? <FiArrowDown /> : <FiArrowUp />}
        </Button>
      </div>
      
      <div className={styles.stockList}>
        {stocks.map(stock => (
          <Stock {...stock} />
        ))}
      </div>
    </div>
  );
};

export default List;