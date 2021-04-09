import styles from './style.module.css';

import StockChart from "../../components/StockChart";

function ChartContainer(props) {

	const setFavorite = (value = false) => {
		props.toogleFavorite(value);
	} 
	
	return (
		<section className={styles.container_chart}>
			<div className={styles.container_pages}>
				<span className={styles.pages_item} onClick={() => setFavorite(false)}>Ações</span>
				<span className={styles.pages_item} onClick={() => setFavorite(true)}>Favoritos</span>
			</div>

			<div className={styles.chart}>
				<StockChart />
			</div>

		</section>

	);
}

export default ChartContainer;
