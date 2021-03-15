//---------------------------------------------------------------< interfaces >
import IStock from "../../interfaces/IStock";
//---------------------------------------------------------------< components >
import Stock from "../Stock";
//-------------------------------------------------------------------< styles >
import "./styles.css";
//--------------------------------------------------------------------< types >
interface StockDisplayerProps {
  stocks: IStock[];
  placeholder: string;
}
//=======================================================[ < StockDisplayer > ]
export default function StockDisplayer({
  stocks,
  placeholder,
}: StockDisplayerProps) {
  //-----------------------------------------------------------------< return >
  return (
    <main className="stock-displayer-container">
      {stocks.length ? (
        <ul>
          {stocks.map((stock, index) => (
            <Stock key={index} stock={stock} />
          ))}
        </ul>
      ) : (
        <p>{placeholder}</p>
      )}
    </main>
  );
}
