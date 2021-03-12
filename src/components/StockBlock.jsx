import styles from '../styles/components/StockBlock.module.css';
import { FavoriteButton } from './FavoriteButton';
import { XYPlot, AreaSeries } from 'react-vis';

export function StockBlock({
  stockName,
  price,
  variation,
  onButtonClick,
  company,
  chart,
}) {
  let xChartValue = 1;
  const dataArr = chart.map((variation) => {
    console.log(company)
    return { x: xChartValue++, y: variation };
   
  });
  console.log(dataArr);

  return (
    <div className={styles.stockWrapper}>
      <div className={styles.stockHeader}>
        <h1>{stockName}</h1>
        <FavoriteButton onButtonClick={onButtonClick} company={company} />
      </div>
      <XYPlot
        width={300}
        height={120}
        margin={{ left: 0, right: 0, top: 10, bottom: 10 }}
      >
        <AreaSeries
          className='area-series-example'
          curve='curveNatural'
          data={dataArr}
        />
      </XYPlot>

      <div className={styles.stockFooter}>
        <ul>
          <li>Variação: {variation}%</li>
          <li>Preço: R$ {price}</li>
        </ul>
      </div>
    </div>
  );
}
