//---------------------------------------------------------------< components >
import Header from "./components/Header";
import List from "./components/List";
import Favorites from "./components/Favorites";
//--------------------------------------------------------------------< hooks >
import { useSelector } from "react-redux";
//-------------------------------------------------------------------< styles >
import "./styles/global.css";
import { RootState } from "./store";
//==================================================================[ < App > ]
function App() {
  //-------------------------------------------------------------< properties >
  const { tab } = useSelector((state: RootState) => state.tab);
  //-----------------------------------------------------------------< return >
  return (
    <div className="App black-theme">
      <Header />
      {tab === "list" && <List />}
      {tab === "favorites" && <Favorites />}
    </div>
  );
}

export default App;
