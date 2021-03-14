import Logo from '../../components/Logo';
import LineChart from '../../components/LineChart';
import stock from '../../stocks.json';
import './style.css';
import { useState } from 'react';

function List() {
    const [data] = useState(stock);
    const [favorites, setFavorites] = useState([]);

    return (
        <div className="list">
            <div className="list__container">
                <Logo />
                <LineChart favorites={favorites} setFavorites={setFavorites} stocks={data} />
            </div>
        </div>
    );
};

export default List;