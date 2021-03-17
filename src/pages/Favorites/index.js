import { useContext } from 'react';
import { FavoritesContext } from '../../components/FavoritesContext';
import Header from '../../components/Header';
import ListFavorites from '../../components/ListFavorites';
import './style.css';

function Favorites() {
    const global = useContext(FavoritesContext);

    return (
        <div className="favorites__content">
            <Header />
            <ListFavorites favorites={global.favorites} setFavorites={global.setFavorites} saveFavorites={global.saveFavorites} setSaveFavorites={global.setSaveFavorites} />
        </div>
    );
};

export default Favorites;