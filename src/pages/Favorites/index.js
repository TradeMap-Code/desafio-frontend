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
            <h1 style={{ color: "white" }}>Favoritos</h1>
            <ListFavorites stock={fav} />
        </div>
    );
};

export default Favorites;