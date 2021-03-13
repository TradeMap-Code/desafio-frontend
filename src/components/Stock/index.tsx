//---------------------------------------------------------------< interfaces >
import IStock from "../../interfaces/IStock";
//---------------------------------------------------------------< components >
import {
  AiFillStar as FillStarIcon,
  AiOutlineStar as OutlineStarIcon,
} from "react-icons/ai";
//--------------------------------------------------------------------< hooks >
import { useState } from "react";
//-------------------------------------------------------------------< styles >
import "./styles.css";
//--------------------------------------------------------------------< types >
type StockProps = {
  stock: IStock;
};
//================================================================[ < Stock > ]
export default function Stock({ stock }: StockProps) {
  //-------------------------------------------------------------< properties >
  const [isFavorite, setIsFavorite] = useState(false);
  //---------------------------------------------------------------------------
  const [minChartValue, maxChartValue] = getThreshold();
  //----------------------------------------------------------------< methods >
  function onFavorite() {
    setIsFavorite(!isFavorite);
  }
  //---------------------------------------------------------------------------
  function getThreshold() {
    const chart = [...stock.chart];
    chart.sort((a, b) => a - b);
    return [chart[0] ?? 0, chart.pop() ?? 0];
  }

  function drawLines() {
    const lines = [];

    const span = maxChartValue - minChartValue;
    const nLines = stock.chart.length - 1;

    for (let i = 0; i < nLines; i++) {
      lines.push(
        <line
          key={i}
          x1={(100 / nLines) * i + "%"}
          y1={100 - (100 * (stock.chart[i] - minChartValue)) / span + "%"}
          x2={(100 / nLines) * (i + 1) + "%"}
          y2={100 - (100 * (stock.chart[i + 1] - minChartValue)) / span + "%"}
        />
      );
    }

    return lines;
  }
  //-----------------------------------------------------------------< return >
  return (
    <li className="stock-container">
      <header>
        <h1>
          {stock.stock}
          <p>{stock.company}</p>
        </h1>
        {isFavorite ? (
          <FillStarIcon onClick={onFavorite} />
        ) : (
          <OutlineStarIcon onClick={onFavorite} />
        )}
      </header>
      <div className="graph-container">
        <svg height="1" width="1" style={{ width: "100%" }}>
          {drawLines()}
        </svg>
      </div>
      <footer>
        <h3>R$ {stock.price.toFixed(2)}</h3>
        <span className={stock.variation >= 0 ? "increase" : "decrease"}>
          R$ {stock.variation.toFixed(2)}
        </span>
      </footer>
    </li>
  );
}
