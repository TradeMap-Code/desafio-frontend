import React from 'react'
import Chart from 'react-apexcharts'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import usePersistedState from '../hooks/usePersistedState'
import { Stock } from '../interfaces/Stock'
import TMButton from './TMButton'

import { Container } from '../styles/components/liststock'

interface Props {
  stockChart: Stock[]
}

const ListStocks: React.FC<Props> = ({ stockChart }) => {
  const [favoritesStock, setFavoritesStock] = usePersistedState('favorites', [''])

  function handleFavorite(name: string) {
    if (favoritesStock.includes(name)) {
      const newFavorites = favoritesStock.filter((favorite: string) => favorite !== name)
      setFavoritesStock([...newFavorites])
    } else {
      favoritesStock.push(name)
      setFavoritesStock([...favoritesStock])
    }
  }

  return (
    <Container>
      {stockChart.map((stock: Stock) => (
        <div className="chart">
          <h3>{stock.series[0].name}</h3>
          <div className="stock-information">
            <span>
              Preço:
              {' '}
              {stock.series[0].price}
            </span>
            <span>
              Variação:
              {' '}
              {stock.series[0].variation}
              %
            </span>
          </div>
          <Chart
            key={stock.series[0].name}
            options={stock.options}
            series={stock.series}
            type="line"
            height="250px"
          />

          {!favoritesStock.includes(stock.series[0].name)
          && (
            <TMButton
              onClick={() => handleFavorite(stock.series[0].name)}
            >
              <AiOutlineStar size={14} />
            </TMButton>
          )}

          {favoritesStock.includes(stock.series[0].name)
          && (
            <TMButton
              onClick={() => handleFavorite(stock.series[0].name)}
            >
              <AiFillStar size={14} />
            </TMButton>
          )}
        </div>
      ))}
    </Container>
  )
}

export default ListStocks
