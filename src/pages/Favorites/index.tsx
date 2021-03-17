import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { IStocks } from '../List';
import {Container,Content,ChartContainer,Chart,StockInfo,StockInfoContainer} from './styles'

import { Line } from 'react-chartjs-2';
import Header from '../../components/Header';

const Favorites: React.FC = ()=>{
  const favoriteStocks = useSelector<IState, IStocks[]>(state => state.favorites.stocks)


  return (
    <>
      <Header/>
      <Container>
        <Content>
          {
            favoriteStocks.filter(fav => fav.favorite).map(stock => (
              <ChartContainer key={stock.company}>
                <StockInfoContainer>
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

export {Favorites}
