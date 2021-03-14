//---------------------------------------------------------------< components >
import Stock from "../Stock";
//--------------------------------------------------------------------< hooks >
import { useSelector } from "react-redux";
//-------------------------------------------------------------------< styles >
import "./styles.css";
//--------------------------------------------------------------------< types >
import { RootState } from "../../store";
//============================================================[ < Favorites > ]
export default function Favorites() {
  //-------------------------------------------------------------< properties >
  const favorite = useSelector((state: RootState) => state.favorite);
  //-----------------------------------------------------------------< return >
  return (
    <div className="favorites-container">
      <ul>
        {favorite.stocks.map((stock, index) => (
          <Stock key={index} stock={stock} />
        ))}
      </ul>
    </div>
  );
}
