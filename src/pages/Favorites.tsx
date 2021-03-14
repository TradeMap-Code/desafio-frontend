/* eslint-disable react/jsx-one-expression-per-line */
import React, { ReactElement, useEffect, useState } from 'react'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'
import Sidebar from '../components/Sidebar'
import { Container } from '../styles/pages/main'
import stocks from '../data/stocks.json'
import TMButton from '../components/TMButton'
import getStockData from '../utils/getStockData'
import { Stock } from '../interfaces/Stock'
import ListStocks from '../components/ListStocks'

import usePersistedState from '../hooks/usePersistedState'

const Favorites = (): ReactElement => {
  const [stockChart, setStockChart] = useState<Stock[]>([])
  const [priceHigher, setPriceHigher] = useState(false)
  const [variationHigher, setVariationHigher] = useState(false)
  const [favoritesStock, setFavoritesStock] = usePersistedState('favorites', [''])

  useEffect(() => {
    const favStocks = getStockData(stocks)
      .filter((stock: Stock) => favoritesStock.includes(stock.series[0].name))

    setStockChart(favStocks)
  }, [])

  function handleOrderByPrice() {
    if (priceHigher) {
      setPriceHigher(false)
      stockChart.sort((a, b) => a.series[0].price - b.series[0].price)
    } else {
      setPriceHigher(true)
      stockChart.sort((a, b) => b.series[0].price - a.series[0].price)
    }
    setStockChart([...stockChart])
  }

  function handleOrderByVariation() {
    if (variationHigher) {
      setVariationHigher(false)
      stockChart.sort((a, b) => a.series[0].variation - b.series[0].variation)
    } else {
      setVariationHigher(true)
      stockChart.sort((a, b) => b.series[0].variation - a.series[0].variation)
    }
    setStockChart([...stockChart])
  }

  return (
    <Container>
      <div id="page-main">
        <Sidebar />
        <main>
          <h2>Favoritos</h2>
          <TMButton onClick={handleOrderByPrice}>
            Preço
            {priceHigher && <AiFillCaretUp size={16} />}
            {!priceHigher && <AiFillCaretDown size={16} />}
          </TMButton>
          <TMButton onClick={handleOrderByVariation}>
            Variação
            {variationHigher && <AiFillCaretUp size={16} />}
            {!variationHigher && <AiFillCaretDown size={16} />}
          </TMButton>
          <ListStocks stockChart={stockChart} />
        </main>

      </div>
    </Container>
  )
}

export default Favorites
