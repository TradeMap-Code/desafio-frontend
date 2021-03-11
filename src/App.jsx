import { useState } from 'react';

import stocks from './stocks.json';
import { FavoriteList } from './components/FavoriteList';
import { Header } from './components/Header';
import { StockList } from './components/StockList';

import './styles/global.css';
import { Filter } from './components/Filter';

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
  const [activeFilter, setActiveFilter] = useState('none');
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

  return (
    <>
      <header>
        <Header setActivePage={setActivePage} />
      </header>
      <section>
        <Filter
          filterOptions={filterOptions}
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
        />
        {activePage === 'list' ? (
          <StockList onButtonClick={onFavoriteStock} stocks={stocks} />
        ) : (
          <FavoriteList
            onButtonClick={onUnfavoriteStock}
            favoriteStocks={favoriteStocks}
          />
        )}
      </section>
    </>
  );
}
