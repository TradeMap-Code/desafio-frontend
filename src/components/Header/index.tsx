//-------------------------------------------------------------------< assets >
import logo from "../../assets/logo.png";
//-------------------------------------------------------------------< styles >
import "./styles.css";
//===============================================================[ < Header > ]
export default function Header() {
  //-----------------------------------------------------------------< return >
  return (
    <header className="header-container">
      <img src={logo} alt="TradeMap" />
    </header>
  );
}
