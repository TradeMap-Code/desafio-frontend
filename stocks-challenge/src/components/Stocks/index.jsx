import styles from './style.module.css';

import StocksExchange from '../StocksExchange';
function Stocks({ filter, favorites }) {

	return (
		<section className={styles.container}>

			<div className={styles.stocks__exchange}>
				<h2 className={styles.exchange_title}>Ações Brasileiras</h2>
				<div className={styles.exchange_stock}>
					<StocksExchange filter={filter} exchange="B3" favorites={favorites} />
				</div>
			</div>

			<div className={styles.stocks__exchange}>
				<h2 className={styles.exchange_title}>Ações Estrangeiras (BDRs)</h2>
				<div className={styles.exchange_stock}>
					<StocksExchange filter={filter} exchange="NASDAQ" favorites={favorites} />
				</div>
			</div>

		</section>
	);
}

export default Stocks;
