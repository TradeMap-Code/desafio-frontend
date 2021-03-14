import { Stock } from '../interfaces/Stock'

function getStockData(stocks: any): Stock[] {
  const stockData: Stock[] = []

  stocks.forEach((stock: any) => {
    stockData.push(
      {
        options: {
          chart: {
            id: 'basic-bar',
            toolbar: {
              show: false,
              autoSelected: '',
            },
          },
          xaxis: {
            labels: {
              show: false,
            },
          },
          theme: {
            monochrome: {
              enabled: true,
              color: '#13b162',
            },
          },
          tooltip: {
            x: {
              show: false,
            },
            marker: {
              show: false,
            },
          },
        },
        series: [
          {
            name: stock.stock,
            data: stock.chart,
            price: stock.price,
            variation: stock.variation,
          },
        ],
      },
    )
  })
  return stockData
}

export default getStockData
