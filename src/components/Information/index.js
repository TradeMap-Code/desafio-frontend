import './style.css';

function Information({ stock }) {
    return (
        <div className="table__content">
            <table>
                <tr>
                    <th>Stock</th>
                    <th>Exchange</th>
                    <th>Country</th>
                    <th>Company</th>
                    <th>Price</th>
                    <th>Variation</th>
                </tr>
                <tr>
                    <td>{stock[0].stock}</td>
                    <td>{stock[0].exchange}</td>
                    <td>{stock[0].country}</td>
                    <td>{stock[0].company}</td>
                    <td>{stock[0].price}</td>
                    <td style={stock[0].variation > 0 ? { color: "var(--up)", fontWeight: "bold" } : { color: "var(--down)", fontWeight: "bold" }}>{stock[0].variation}%</td>
                </tr>
            </table>
        </div>
    );
};

export default Information;