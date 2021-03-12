import { useState } from 'react';

import { FavoriteList } from './components/FavoriteList';
import { Header } from './components/Header';
import { StockList } from './components/StockList';
import { Filter } from './components/Filter';

import stocks from './stocks.json';
import './styles/global.css';

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

  function onFavoriteStock(selected) {
    stocks.map((stock) => {
      if (stock.company === selected) {
        return setFavoriteStock([...favoriteStocks, stock]);
      }
      return null;
    });
  }

  function onUnfavoriteStock(selected) {
    favoriteStocks.map((favorited) => {
      if (favorited.company === selected) {
        const findIndex = favoriteStocks.indexOf(favorited);
        favoriteStocks.splice(findIndex, 1);
        return setFavoriteStock([...favoriteStocks]);
      }
      return null;
    });
  }

  function onSetFilterState(label, value) {
    setActiveFilter({ label, value });
  }

  function onFilterSet(stocksArray) {
    const stockOrderByPrice = stocksArray
      .sort((stockA, stockB) => stockA.price - stockB.price)
      .slice(0, stocks.lenght);

    const stockOrderVariation = stocksArray
      .sort((stockA, stockB) => stockA.variation - stockB.variation)
      .slice(0, stocks.lenght);

    if (activeFilter.value === 'expensivest') {
      return stockOrderByPrice.reverse();
    } else if (activeFilter.value === 'cheapest') {
      return stockOrderByPrice;
    } else if (activeFilter.value === 'higher') {
      return stockOrderVariation.reverse();
    } else if (activeFilter.value === 'lower') {
      return stockOrderVariation;
    }
    return stocksArray === stocks ? stocks : favoriteStocks;
  }

  return (
    <div className={'app-wrapper'}>
      <header>
        <Header setActivePage={setActivePage} />
      </header>
      <section>
        <Filter
          filterOptions={filterOptions}
          activeFilter={activeFilter}
          onSelectFilter={onSetFilterState}
        />
        {activePage === 'list' ? (
          <StockList
            onFilterSet={onFilterSet}
            onButtonClick={onFavoriteStock}
            stocks={stocks}
            buttonFavText={'favoritar'}
          />
        ) : (
          <FavoriteList
            onFilterSet={onFilterSet}
            onButtonClick={onUnfavoriteStock}
            favoriteStocks={favoriteStocks}
          />
        )}
      </section>
    </div>
  );
}
