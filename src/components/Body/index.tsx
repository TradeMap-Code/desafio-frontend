//---------------------------------------------------------------< interfaces >
import IStock from "../../interfaces/IStock";
//---------------------------------------------------------------< components >
import Stock from "../Stock";
//--------------------------------------------------------------------< hooks >
import { useState } from "react";
//-------------------------------------------------------------------< assets >
import stocks from "../../assets/stocks.json";
//-------------------------------------------------------------------< styles >
import "./styles.css";
//=================================================================[ < Body > ]
export default function Body() {
  //-------------------------------------------------------------< properties >
  const [stockList] = useState<IStock[]>(stocks);
  console.log(stockList);
  //----------------------------------------------------------------< methods >
  //---------------------------------------------------------------------------
  //-----------------------------------------------------------------< return >
  return (
    <main className="body-container">
      <ul>
        {stockList.map((stock, index) => (
          <Stock key={index} stock={stock} />
        ))}
      </ul>
    </main>
  );
}
