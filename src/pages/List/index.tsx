import React, { useCallback, useEffect, useMemo, useState } from 'react';

import {Container,Content,OrderBar,ChartContainer,Chart,StockInfo,StockInfoContainer} from './styles'

import {FiStar} from 'react-icons/fi'

import {ImSortAlphaAsc, ImSortAlphaDesc,ImSortNumericAsc,ImSortNumbericDesc} from 'react-icons/im'

import stockJSON from './stocks.json'
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { addStockToFavorites } from '../../store/modules/favorites/actions';
import Header from '../../components/Header';
import { IState } from '../../store';

export interface IStocks {
  "stock": string;
  "exchange": string;
  "country": string;
  "company": string;
  "variation": number,
  "price": number,
  "chart": number[],
  "favorite": boolean
}

const List:React.FC = () =>{

  const favoritesStocks = useSelector<IState, IStocks[]>(state => state.favorites.stocks)

  console.log(favoritesStocks)


  const [stocks,setStocks] = useState<IStocks[]>([] as IStocks[])
  const [sortAlphAsc,setSortAlphAsc] = useState<true | false | null>(null)
  const [sortNumAsc,setSortNumAsc] = useState<true | false | null>(null)

  const dispatch = useDispatch()

  const stocksMemo = useMemo(()=>{
    return stockJSON
  },[])

  useEffect(()=>{
    let stocks = stocksMemo.map(stock => {
      const newStocks = {
        ...stock,
        favorite: false
      }

      return newStocks
    })

    if(favoritesStocks){
      stocks = favoritesStocks
    }

    if(sortAlphAsc === true){
      stocks = stocks.sort((a,b)=> {
          return a.company < b.company ? -1 : a.company > b.company? 1 : 0;
        })
      } else {
        stocks = stocks.sort((a,b)=> {
          return a.company < b.company ? 1 : a.company > b.company? -1 : 0;
        })
      }

    if(sortNumAsc === true && !sortAlphAsc){
      stocks = stocks.sort((a,b)=> {
        return a.variation < b.variation ? -1 : a.variation > b.variation? 1 : 0;
      })
    } if(sortNumAsc === false && !sortAlphAsc) {
      stocks = stocks.sort((a,b)=> {
        return a.variation < b.variation ? 1 : a.variation > b.variation? -1 : 0;
      })
    }

    setStocks(stocks)
  },[sortAlphAsc,sortNumAsc,stocksMemo,favoritesStocks])

  const handleIconClick = useCallback((stock: IStocks)=>{
    const newStocks = stocks.map(s => {
      if(s.company === stock.company){
        return {
          ...stock,
          favorite: !stock.favorite
        }
      }
      return s
    })

    setStocks(newStocks)

    dispatch(addStockToFavorites(newStocks))
  },[dispatch,stocks])

  const handleSortAlphClick = useCallback(()=>{
    if(!sortAlphAsc){
      setSortAlphAsc(true)
      setSortNumAsc(null)
    } else {
      setSortAlphAsc(false)
      setSortNumAsc(null)
    }
  },[sortAlphAsc])

  const handleSortNumClick = useCallback(()=>{
    if(!sortNumAsc){
      setSortNumAsc(true)
      setSortAlphAsc(false)
    } else {
      setSortNumAsc(false)
      setSortAlphAsc(false)
    }
  },[sortNumAsc])

  return (
    <>
    <Header/>
    <Container>
      <Content>
        <OrderBar>
          <div style={{cursor: 'pointer'}} onClick={()=>{handleSortAlphClick()}}>
            {!sortAlphAsc ? <ImSortAlphaAsc  size={20} /> : <ImSortAlphaDesc  size={20} />}

          </div>
          <div style={{cursor: 'pointer'}} onClick={()=>{handleSortNumClick()}}>
          {!sortNumAsc ? <ImSortNumericAsc size={20}/> : <ImSortNumbericDesc  size={20} />}

          </div>
        </OrderBar>
        {
          stocks.map(stock => (
            <ChartContainer key={stock.company}>
              <StockInfoContainer>
                <FiStar style={{cursor: 'pointer'}} fill={stock.favorite ? "yellow" : ""} onClick={()=>{handleIconClick(stock)}}/>
                <StockInfo>Price: R$ {stock.price}</StockInfo>
                <StockInfo>Variation: R$ {stock.variation}</StockInfo>
              </StockInfoContainer>
              <Chart>
                <Line
                  data={
                    {
                      labels: stock.chart.map((value,index,_)=>(index)),
                      datasets: [
                        {
                          label: stock.company,
                          data: stock.chart,
                          backgroundColor: 'green'
                        }
                      ]
                    }
                  }
                />
              </Chart>
            </ChartContainer>
          ))
        }
      </Content>
    </Container>
    </>
  )
}

export {List}
