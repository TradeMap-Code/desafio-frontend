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

const List = (): ReactElement => {
  const [stockChart, setStockChart] = useState<Stock[]>([])
  const [priceHigher, setPriceHigher] = useState(false)
  const [variationHigher, setVariationHigher] = useState(false)

  useEffect(() => {
    setStockChart(getStockData(stocks))
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
          <h2>Lista</h2>
          <TMButton onClick={handleOrderByPrice}>
            Preço
            {priceHigher && <AiFillCaretUp size={12} />}
            {!priceHigher && <AiFillCaretDown size={12} />}
          </TMButton>
          <TMButton onClick={handleOrderByVariation}>
            Variação
            {variationHigher && <AiFillCaretUp size={12} />}
            {!variationHigher && <AiFillCaretDown size={12} />}
          </TMButton>
          <ListStocks stockChart={stockChart} />
        </main>

      </div>
    </Container>
  )
}

export default List
