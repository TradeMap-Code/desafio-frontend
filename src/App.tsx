//---------------------------------------------------------------< components >
import Header from "./components/Header";
import List from "./components/List";
import Favorites from "./components/Favorites";
//--------------------------------------------------------------------< hooks >
import { useState } from "react";
//-------------------------------------------------------------------< styles >
import "./styles/global.css";
//==================================================================[ < App > ]
function App() {
  //-------------------------------------------------------------< properties >
  const [tab, setTab] = useState<"list" | "favorites">("list");
  //----------------------------------------------------------------< methods >
  //-----------------------------------------------------------------< return >
  return (
    <div className="App">
      <Header changeTab={setTab} />
      {tab === "list" && <List />}
      {tab === "favorites" && <Favorites />}
    </div>
  );
}

export default App;
