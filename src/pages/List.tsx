import React from 'react';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../components/Button';
import Header from '../components/Header';
import Stock from '../components/Stock';

import { State } from '../redux/modules/state/types';
import styles from '../styles/pages/List.module.css';


const List: React.FC = () => {

  const dispatch = useDispatch();
  const appState = useSelector((state: State) => state);

  const stocks = useSelector((state: State) => state.stocks);
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
      {console.log(appState)}
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

export default List;