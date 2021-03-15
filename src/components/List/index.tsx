//---------------------------------------------------------------< interfaces >
import IStock from "../../interfaces/IStock";
//---------------------------------------------------------------< components >
import Stock from "../Stock";
//--------------------------------------------------------------------< hooks >
import { useState } from "react";
//--------------------------------------------------------------------< mocks >
import stocks from "../../mocks/stocks.json";
//-------------------------------------------------------------------< styles >
import "./styles.css";
//=================================================================[ < List > ]
export default function List() {
  //-------------------------------------------------------------< properties >
  const [stockList] = useState<IStock[]>(stocks);
  //-----------------------------------------------------------------< return >
  return (
    <main className="list-container">
      <ul>
        {stockList.map((stock, index) => (
          <Stock key={index} stock={stock} />
        ))}
      </ul>
    </main>
  );
}
