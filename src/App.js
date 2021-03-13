import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './routes';
import './App.css';
import List from './pages/List';
import Favorites from './pages/Favorites';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
