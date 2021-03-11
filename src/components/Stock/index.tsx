//---------------------------------------------------------------< interfaces >
import IStock from "../../interfaces/IStock";
//-------------------------------------------------------------------< styles >
import "./styles.css";
//--------------------------------------------------------------------< types >
type StockProps = {
  stock: IStock;
};
//================================================================[ < Stock > ]
export default function Stock({ stock }: StockProps) {
  //-----------------------------------------------------------------< return >
  return (
    <li className="stock-container">
      <h1>{stock.stock}</h1>
      <p>{stock.company}</p>
      <h2>{stock.price}</h2>
    </li>
  );
}
