import "./App.module.css";
import { useState } from "react";
import { Provider } from 'react-redux';
import store from "./store";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChartContainer from "./page/ChartContainer";

function App() {
  const [favorites, setFavorites] = useState(false);


  return (
    <Provider store={store}>
      <main>

        <Header />
        
        <Sidebar favorites={favorites} />

        <ChartContainer toogleFavorite={setFavorites} />

      </main>
    </Provider>
  );
}

export default App;
