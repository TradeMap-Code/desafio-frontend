//-------------------------------------------------------------------< assets >
import logo from "../../assets/logo.png";
//-------------------------------------------------------------------< styles >
import "./styles.css";
//--------------------------------------------------------------------< types >
interface HeaderProps {
  changeTab: React.Dispatch<React.SetStateAction<"list" | "favorites">>;
}
//===============================================================[ < Header > ]
export default function Header({ changeTab }: HeaderProps) {
  //----------------------------------------------------------------< methods >
  // temporario
  function onLogoClick() {
    changeTab("favorites");
  }
  //-----------------------------------------------------------------< return >
  return (
    <header className="header-container">
      <img src={logo} alt="TradeMap" onClick={onLogoClick} />
    </header>
  );
}
