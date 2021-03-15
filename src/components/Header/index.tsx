//---------------------------------------------------------------< components >
import { Switch } from "./Switch";
//--------------------------------------------------------------------< hooks >
import { useDispatch, useSelector } from "react-redux";
//--------------------------------------------------------------------< redux >
import { gotoTab } from "../../store/tab/actions";
//-------------------------------------------------------------------< assets >
import logo from "../../assets/logo.png";
//-------------------------------------------------------------------< styles >
import "./styles.css";
//--------------------------------------------------------------------< types >
import { RootState } from "../../store";
//===============================================================[ < Header > ]
export default function Header() {
  //-------------------------------------------------------------< properties >
  const tab = useSelector((state: RootState) => state.tab);
  const { theme } = useSelector((state: RootState) => state.theme);
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
    <header className={`header-container ${theme}`}>
      <div>
        <img src={logo} alt="TradeMap" />
        <button
          type="button"
          disabled={tab.tab === "list"}
          onClick={onListButtonClick}
        >
          AÇÕES
          <div />
        </button>
        <button
          type="button"
          disabled={tab.tab === "favorites"}
          onClick={onFavoritesButtonClick}
        >
          FAVORITOS
          <div />
        </button>
      </div>
      <Switch size={3} />
    </header>
  );
}
