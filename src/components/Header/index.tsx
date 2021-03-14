//--------------------------------------------------------------------< hooks >
import { useDispatch, useSelector } from "react-redux";
//-------------------------------------------------------------------< assets >
import logo from "../../assets/logo.png";
//-------------------------------------------------------------------< styles >
import "./styles.css";
//--------------------------------------------------------------------< types >
import { RootState } from "../../store";
import { gotoTab } from "../../store/tab/actions";
//===============================================================[ < Header > ]
export default function Header() {
  //-------------------------------------------------------------< properties >
  const tab = useSelector((state: RootState) => state.tab);
  const dispatch = useDispatch();
  //----------------------------------------------------------------< methods >
  function onListButtonClick() {
    dispatch(gotoTab("list"));
  }
  function onFavoritesButtonClick() {
    dispatch(gotoTab("favorites"));
  }
  //-----------------------------------------------------------------< return >
  return (
    <header className="header-container">
      <img src={logo} alt="TradeMap" />
      <button
        type="button"
        disabled={tab.tab === "list"}
        onClick={onListButtonClick}
      >
        AÇÕES
      </button>
      <button
        type="button"
        disabled={tab.tab === "favorites"}
        onClick={onFavoritesButtonClick}
      >
        FAVORITOS
      </button>
    </header>
  );
}
