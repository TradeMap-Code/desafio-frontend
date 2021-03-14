//---------------------------------------------------------------< components >
import Header from "./components/Header";
import Lista from "./components/Lista";
//-------------------------------------------------------------------< styles >
import "./styles/global.css";
//==================================================================[ < App > ]
function App() {
  //-----------------------------------------------------------------< return >
  return (
    <div className="App">
      <Header />
      <Lista />
    </div>
  );
}

export default App;
