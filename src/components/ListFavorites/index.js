import './style.css';

function ListFavorites({ stock }) {
    console.log("Stock: ", stock);
    return (
        <div className="table__content">
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
                    {stock.map((active) => {
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
                                <button>Remover Favorito</button>
                            </td>
                        </tr>);
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ListFavorites;