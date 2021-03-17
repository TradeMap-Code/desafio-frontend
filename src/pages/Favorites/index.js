import { useContext, useState } from 'react';
import { FavoritesContext } from '../../components/FavoritesContext';
import Header from '../../components/Header';
import ListFavorites from '../../components/ListFavorites';
import './style.css';

function Favorites() {
    const global = useContext(FavoritesContext);
    const [fav, setFav] = useState(global.favorites);

    return (
        <div className="favorites__content">
            <Header />
            <ListFavorites favorites={fav} setFavorites={setFav} />
        </div>
    );
};

export default Favorites;