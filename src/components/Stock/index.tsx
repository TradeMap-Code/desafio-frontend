//---------------------------------------------------------------< interfaces >
import IStock from "../../interfaces/IStock";
//---------------------------------------------------------------< components >
import {
  AiFillStar as FillStarIcon,
  AiOutlineStar as OutlineStarIcon,
} from "react-icons/ai";
import Graph from "./Graph";
//--------------------------------------------------------------------< hooks >
import { useDispatch, useSelector } from "react-redux";
//--------------------------------------------------------------------< redux >
import { addFavorite, removeFavorite } from "../../store/favorite/actions";
//-------------------------------------------------------------------< styles >
import "./styles.css";
//--------------------------------------------------------------------< types >
import { RootState } from "../../store";
type StockProps = {
  stock: IStock;
};
//================================================================[ < Stock > ]
export default function Stock({ stock }: StockProps) {
  //-------------------------------------------------------------< properties >
  const { stocks } = useSelector((state: RootState) => state.favorite);
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  //---------------------------------------------------------------------------
  const isFavorite =
    stocks.filter((_stock) => _stock.stock === stock.stock).length === 1;
  //----------------------------------------------------------------< methods >
  function onFavorite() {
    dispatch(addFavorite(stock));
  }

  function onUnfavorite() {
    dispatch(removeFavorite(stock));
  }
  //-----------------------------------------------------------------< return >
  return (
    <li className={`stock-container ${theme}`}>
      <header>
        <h1>
          {stock.stock}
          <p>{stock.company}</p>
        </h1>
        {isFavorite ? (
          <FillStarIcon className="favorited" onClick={onUnfavorite} />
        ) : (
          <OutlineStarIcon onClick={onFavorite} />
        )}
      </header>
      <Graph chart={stock.chart} />
      <footer>
        <h3>R$ {stock.price.toFixed(2)}</h3>
        <span className={stock.variation >= 0 ? "increase" : "decrease"}>
          R$ {stock.variation.toFixed(2)}
        </span>
      </footer>
    </li>
  );
}
