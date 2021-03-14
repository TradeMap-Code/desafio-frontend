//---------------------------------------------------------------< interfaces >
import IStock from "../../interfaces/IStock";
//---------------------------------------------------------------< components >
import {
  AiFillStar as FillStarIcon,
  AiOutlineStar as OutlineStarIcon,
} from "react-icons/ai";
//--------------------------------------------------------------------< hooks >
import { useMemo } from "react";
//--------------------------------------------------------------------< redux >
import { addFavorite, removeFavorite } from "../../store/favorite/actions";
//-------------------------------------------------------------------< styles >
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
//--------------------------------------------------------------------< types >
import { RootState } from "../../store";
type StockProps = {
  stock: IStock;
};
//================================================================[ < Stock > ]
export default function Stock({ stock }: StockProps) {
  //-------------------------------------------------------------< properties >
  const favorite = useSelector((state: RootState) => state.favorite);
  const dispatch = useDispatch();
  //---------------------------------------------------------------------------
  const isFavorite = useMemo(() => favorite.stocks.includes(stock), [
    favorite,
    stock,
  ]);
  //----------------------------------------------------------------< methods >
  function onFavorite() {
    dispatch(addFavorite(stock));
  }

  function onUnfavorite() {
    dispatch(removeFavorite(stock));
  }
  //---------------------------------------------------------------------------
  function getThreshold() {
    const chart = [...stock.chart];
    chart.sort((a, b) => a - b);
    return [chart[0] ?? 0, chart.pop() ?? 0];
  }

  function drawLines() {
    const lines = [];

    const [min, max] = getThreshold();
    const span = max - min;
    const nLines = stock.chart.length - 1;

    const getXY = (i: number) => [
      (100 * i) / nLines + "%",
      100 * (1 - (stock.chart[i] - min) / span) + "%",
    ];

    for (let i = 0; i < nLines; i++) {
      const [x1, y1] = getXY(i);
      const [x2, y2] = getXY(i + 1);

      lines.push(<line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />);
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
          <FillStarIcon onClick={onUnfavorite} />
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
