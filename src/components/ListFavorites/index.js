import { useState, useEffect } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import './style.css';

function ListFavorites({ favorites, setFavorites }) {
    const [price, setPrice] = useState(true);
    const [variation, setVariation] = useState(true);

    function handleOrderPrice() {
        setPrice(!price);
        if (price === true) {
            favorites.sort((a, b) => b.price - a.price);
        } else {
            favorites.sort((a, b) => a.price - b.price);
        };
    };

    function handleOrderVariation() {
        setVariation(!variation);

        if (variation === true) {
            favorites.sort((a, b) => b.variation - a.variation);
        } else {
            favorites.sort((a, b) => a.variation - b.variation);
        }
    };

    function removeFavorites(active) {
        setFavorites(favorites.filter((fav) => fav.stock !== active));
    };

    useEffect(() => {
        console.log("Teste: ", favorites);
    }, [favorites]);

    return (
        <div className="table__content">
            <h1>Favoritos</h1>
            <div className="btn__group">
                <button onClick={handleOrderPrice}>
                    {price ? "Ordenar por maior Preço" : "Ordenar por menor Preço"}
                    {price ? <FiArrowUp /> : <FiArrowDown />}
                </button>
                <button onClick={handleOrderVariation}>
                    {variation ? "Ordenar por maior Variação" : "Ordenar por menor Variação"}
                    {variation ? <FiArrowUp /> : <FiArrowDown />}
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Stock</th>
                        <th>Exchange</th>
                        <th>Country</th>
                        <th>Company</th>
                        <th>Price</th>
                        <th>Variation</th>
                    </tr>
                </thead>
                <tbody>
                    {favorites.map((active) => {
                        return (<tr>
                            <td>{active.stock}</td>
                            <td>{active.exchange}</td>
                            <td>{active.country}</td>
                            <td>{active.company}</td>
                            <td>{active.price}</td>
                            <td style={active.variation > 0 ? { color: "var(--up)", fontWeight: "bold" } : { color: "var(--down)", fontWeight: "bold" }}>
                                {active.variation}%
                            </td>
                            <td>
                                <button onClick={() => removeFavorites(active.stock)}>Remover Favorito</button>
                            </td>
                        </tr>);
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ListFavorites;