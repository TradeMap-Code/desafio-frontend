//---------------------------------------------------------------< components >
import Header from "./components/Header";
import StockDisplayer from "./components/StockDisplayer";
//--------------------------------------------------------------------< hooks >
import { useSelector } from "react-redux";
//--------------------------------------------------------------------< mocks >
import stocks from "./mocks/stocks.json";
//-------------------------------------------------------------------< styles >
import "./styles/global.css";
import { RootState } from "./store";
//==================================================================[ < App > ]
function App() {
  //-------------------------------------------------------------< properties >
  const { theme } = useSelector((state: RootState) => state.theme);
  const { tab } = useSelector((state: RootState) => state.tab);
  const favorite = useSelector((state: RootState) => state.favorite);
  //-----------------------------------------------------------------< return >
  return (
    <div className={`App ${theme}`}>
      <Header />
      {tab === "list" && (
        <StockDisplayer
          stocks={stocks}
          placeholder="Não há ações disponíveis no momento"
        />
      )}
      {tab === "favorites" && (
        <StockDisplayer
          stocks={favorite.stocks}
          placeholder="Você não tem nenhuma ação favoritada"
        />
      )}
    </div>
  );
}

export default App;
