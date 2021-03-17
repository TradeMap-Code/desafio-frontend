import React from 'react'
import stocks from '../../stocks.json'
import Card from '../components/Card'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function index() {
  return (
    
    <section>
    <div className="CardContainer">
     
      {stocks.map((stock,key) =><Card key={key} stock={stock}/>)}
      {/* {stocks.map((stock,key) =><FavoriteSelect key={key} stock={stock}/>)} ) */}
      {/* {stocks.map((stock,key) =><Chart key={key} stock={stock} />)} */}
    </div>
    </section>
  )
}
