import React from 'react';
import Header from '../components/Header';
import Stock from '../components/Stock';

import Stocks from '../data/stocks.json';
import styles from '../styles/pages/List.module.css';

const List: React.FC = () => {

  return (
    <div className={styles.container}>
      <Header />
      
      <div className={styles.stockList}>
        {Stocks.map(stock => (
          <Stock {...stock} />
        ))}
      </div>
    </div>
  );
};

export default List;