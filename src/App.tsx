//---------------------------------------------------------------< components >
import Header from "./components/Header";
import Body from "./components/Body";
//-------------------------------------------------------------------< styles >
import "./styles/global.css";
//==================================================================[ < App > ]
function App() {
  //-----------------------------------------------------------------< return >
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
