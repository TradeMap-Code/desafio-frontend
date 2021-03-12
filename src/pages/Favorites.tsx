import React from 'react';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../components/Button';
import Header from '../components/Header';
import Stock from '../components/Stock';

import { State } from '../redux/modules/state/types';
import styles from '../styles/pages/Favorites.module.css';

const Favorites: React.FC = () => {

  const dispatch = useDispatch();

  const stocks = useSelector((state: State) => {
     const filterFavoriteStocks = state.stocks.filter(stock => state.favoritesStocks.includes(stock.stock));
    return filterFavoriteStocks;
  });
  const priceOrderInverse = useSelector((state: State) => state.priceOrderInverse);
  const variationOrderInverse = useSelector((state: State) => state.variationOrderInverse);

  function handlePriceOrder(inverse: boolean) {
    if(inverse) {
      dispatch({
        type: 'UPDATE_PRICE_ORDER',
        payload: inverse
      });
    } else {
      dispatch({
        type: 'UPDATE_PRICE_ORDER',
        payload: inverse
      });
    }
  }

  function handleVariationOrder(inverse: boolean) {
    if(inverse) {
      dispatch({
        type: 'UPDATE_VARIATION_ORDER',
        payload: inverse
      });
    } else {
      dispatch({
        type: 'UPDATE_VARIATION_ORDER',
        payload: inverse
      });
    }
  }

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.orderButtons}>
        <Button onClick={() => handlePriceOrder(!priceOrderInverse)}>
          Ordenar por Preço
          {priceOrderInverse ? <FiArrowDown /> : <FiArrowUp />}
        </Button>


        <Button onClick={() => handleVariationOrder(!variationOrderInverse)}>
          Ordenar por Variação
          {variationOrderInverse ? <FiArrowDown /> : <FiArrowUp />}
        </Button>
      </div>
      
      <div className={styles.stockList}>
        {stocks.map(stock => (
          <div key={stock.stock}>
            <Stock {...stock} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;