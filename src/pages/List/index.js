import { useState, useContext } from 'react';
import { FavoritesContext } from '../../components/FavoritesContext';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';
import stock from '../../stocks.json';
import './style.css';

function List() {
    const [data] = useState(stock);
    const global = useContext(FavoritesContext);

    return (
        <div className="list">
            <Header />
            <div className="list__container">
                <LineChart favorites={global.favorites} setFavorites={global.setFavorites} stocks={data} />
            </div>
        </div>
    );
};

export default List;