import { useEffect, useState } from 'react';
import stocks from './stocks.json';

import { FavoriteList } from './components/FavoriteList';
import { Header } from './components/Header';
import { StockList } from './components/StockList';
import { Filter } from './components/Filter';

import './styles/global.css';

const getLocalStore = localStorage.getItem('favoriteStocks');

const filterOptions = [
  {
    label: 'Sem filtro',
    value: 'none',
  },
  {
    label: 'Mais caros',
    value: 'expensivest',
  },
  {
    label: 'Mais baratos',
    value: 'cheapest',
  },
  {
    label: 'Maior variação',
    value: 'higher',
  },
  {
    label: 'Menor variação',
    value: 'lower',
  },
];

export default function App() {
  const [activePage, setActivePage] = useState('list');
  const [activeFilter, setActiveFilter] = useState({
    label: 'Sem filtro',
    value: 'none',
  });
  const [favoriteStocks, setFavoriteStock] = useState([]);

  useEffect(() => {
    // if localStore is not set, it set's a new item, else, gets it's value
    getLocalStore === null
      ? localStorage.setItem('favoriteStocks', JSON.stringify([]))
      : setFavoriteStock(JSON.parse(getLocalStore));
  }, []);

  function onFavoriteStock(selected) {
    stocks.map((stock) => {
      if (stock.company === selected) {
        setFavoriteStock([...favoriteStocks, stock]);
        localStorage.setItem(
          'favoriteStocks',
          JSON.stringify([...favoriteStocks, stock])
        );
      }
      return null;
    });
  }

  function onUnfavoriteStock(selected) {
    favoriteStocks.map((favorited) => {
      if (favorited.company === selected) {
        const findIndex = favoriteStocks.indexOf(favorited);
        // removes selected stock from list and returns new array.
        favoriteStocks.splice(findIndex, 1);
        setFavoriteStock([...favoriteStocks]);
        return localStorage.setItem(
          'favoriteStocks',
          JSON.stringify(favoriteStocks)
        );
      }
      return null;
    });
  }

  function onSetFilterState(label, value) {
    setActiveFilter({ label, value });
  }

  function displayFilteredStockList(stocksArray) {
    const stockOrderByPrice = stocksArray
      .sort((stockA, stockB) => stockA.price - stockB.price)
      .slice(0, stocks.lenght);

    const stockOrderByVariation = stocksArray
      .sort((stockA, stockB) => stockA.variation - stockB.variation)
      .slice(0, stocks.lenght);

    if (activeFilter.value === 'expensivest') {
      return stockOrderByPrice.reverse();
    } else if (activeFilter.value === 'cheapest') {
      return stockOrderByPrice;
    } else if (activeFilter.value === 'higher') {
      return stockOrderByVariation.reverse();
    } else if (activeFilter.value === 'lower') {
      return stockOrderByVariation;
    }

    // determines wich stocks array to display
    return stocksArray === stocks ? stocks : favoriteStocks;
  }

  return (
    <div className={'app-wrapper'}>
      <header>
        <Header setActivePage={setActivePage} />
      </header>
      <section>
        <Filter
          activePage={activePage}
          filterOptions={filterOptions}
          activeFilter={activeFilter}
          onSelectFilter={onSetFilterState}
        />
        {activePage === 'list' ? (
          <StockList
            displayFilteredStockList={displayFilteredStockList}
            onButtonClick={onFavoriteStock}
            stocks={stocks}
            buttonFavText={'favoritar'}
          />
        ) : (
          <FavoriteList
            displayFilteredStockList={displayFilteredStockList}
            onButtonClick={onUnfavoriteStock}
            favoriteStocks={favoriteStocks}
          />
        )}
      </section>
    </div>
  );
}
