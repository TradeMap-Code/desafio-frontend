import { useSelector } from 'react-redux';
import styles from './style.module.css';
import stocks from '../../stocks.json';

import StockItem from '../StockItem';

function Stocks({ filter, exchange, favorites }) {

	const favoritesStocks = useSelector(state => state.favorite);

	return (
		<div className={styles.exchange_stock}>

			{
				favorites ?
					(filter === "greaterVariation" ?
						favoritesStocks.sort((a, b) => { return b.variation - a.variation }) :
						filter === "lowerVariation" ?
							favoritesStocks.sort((a, b) => { return a.variation - b.variation }) :
							filter === "greaterPrice" ?
								favoritesStocks.sort((a, b) => { return b.price - a.price }) :
								filter === "lowerPrice" ?
									favoritesStocks.sort((a, b) => { return a.price - b.price }) : favoritesStocks)
						.map(stock =>
							stock.exchange === exchange ? <StockItem key={stock.stock} stock={stock} favorites={favorites} />
								: ""
						)
					:

					(filter === "greaterVariation" ?
						stocks.sort((a, b) => { return b.variation - a.variation }) :
						filter === "lowerVariation" ?
							stocks.sort((a, b) => { return a.variation - b.variation }) :
							filter === "greaterPrice" ?
								stocks.sort((a, b) => { return b.price - a.price }) :
								filter === "lowerPrice" ?
									stocks.sort((a, b) => { return a.price - b.price }) : stocks)
						.map(stock =>
							stock.exchange === exchange ? <StockItem key={stock.stock} stock={stock} favorites={favorites} />
								: ""
						)
			}
		</div>

	);
}

export default Stocks;
