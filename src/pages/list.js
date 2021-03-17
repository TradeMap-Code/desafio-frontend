import React from 'react'
import stocks from '../../stocks.json'
import Card from '../components/Card'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function favorite() {
  console.log(stocks)
  return (
    
    <section>

    <div className="CardContainer">
    {stocks.map((stock,key) =><Card key={key} stock={stock}/>)}
    </div>
    
    </section>
  )
}