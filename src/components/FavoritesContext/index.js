import { createContext, useState } from 'react';
import useLocalStorage from '../../hook/useLocalStorage';

export const FavoritesContext = createContext();

export const FavoritesGlobal = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [saveFavorites, setSaveFavorites] = useLocalStorage('favorites', [""]);

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites, saveFavorites, setSaveFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};