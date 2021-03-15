//--------------------------------------------------------------------< hooks >
import { useDispatch, useSelector } from "react-redux";
//--------------------------------------------------------------------< redux >
import { gotoTab } from "../../store/tab/actions";
import { switchTheme } from "../../store/theme/actions";
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

  function onSwitchTheme() {
    switch (theme) {
      case "white-theme":
        dispatch(switchTheme("black-theme"));
        break;
      case "black-theme":
        dispatch(switchTheme("white-theme"));
        break;
      default:
        break;
    }
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
      {/* temporario */}
      <button type="button" onClick={onSwitchTheme}>
        switch theme
      </button>
    </header>
  );
}
