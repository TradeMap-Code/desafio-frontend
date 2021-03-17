import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './routes';
import List from './pages/List';
import Favorites from './pages/Favorites';
import { FavoritesGlobal } from './components/FavoritesContext';

function App() {

  return (
    <FavoritesGlobal>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </FavoritesGlobal>
  );
}

export default App;
