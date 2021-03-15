//---------------------------------------------------------------< components >
import Stock from "../Stock";
//--------------------------------------------------------------------< mocks >
import stocks from "../../mocks/stocks.json";
//-------------------------------------------------------------------< styles >
import "./styles.css";
//=================================================================[ < List > ]
export default function List() {
  //-----------------------------------------------------------------< return >
  return (
    <main className="list-container">
      {stocks.length ? (
        <ul>
          {stocks.map((stock, index) => (
            <Stock key={index} stock={stock} />
          ))}
        </ul>
      ) : (
        <p>Não há ações disponíveis no momento</p>
      )}
    </main>
  );
}
