import React from 'react'
import stocks from '../../stocks.json'
import Card from '../components/Card'

export default function index() {
  console.log(stocks)
  return (
    <div className="CardContainer">
      {stocks.map((stock,key) =><Card key={key} stock={stock}/>)}
    </div> 
  )
}
