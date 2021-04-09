import { useDispatch } from "react-redux";

import styles from './style.module.css';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

function StockItem({ stock, favorites }) {

  const dispatch = useDispatch();

  const addFavoriteStock = (favoriteStock) => {
    dispatch({ type: "ADD_FAVORITE_STOCK", stock: favoriteStock })
  }

  const addVizualizeStock = (vizualizeStock) => {
    dispatch({ type: "ADD_VISUALIZE_STOCK", stock: vizualizeStock })
  }

  return (
    <>
      <div className={styles.stock__item} onClick={() => addVizualizeStock(stock)}>
        <div className={styles.stock_first_part}>
          <h4 className={styles.stock__stock}>{stock.stock}</h4>
          {favorites ?
            <HeartFilled className={styles.item_favorite_icon} /> :
            <HeartOutlined className={styles.item_favorite_icon} onClick={() => addFavoriteStock(stock)} />
          }
        </div>

        <div className={styles.stock_second_part}>
          <p className={styles.stock__price}>
            {stock.country !== "BR" ? "$ " : "R$ "}
            {stock.price.toFixed(2).replace(".", ",")}</p>
          <p className={(stock.variation < 0 ? styles.stock__variation_negative : styles.stock__variation_positive)}>
            {stock.variation ? `${stock.variation.toFixed(2).replace('.', ',')}%` : ""}
          </p>
        </div>
      </div>
    </>
  );
}

export default StockItem;
