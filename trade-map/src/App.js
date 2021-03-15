import Routes from './routes';
import stocks from './stocks.json';
import { Provider, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import stockReducer, { INITIAL_STATE } from './reducers';

import './assets/styles/global.css';
import { dataFetched } from './actions';

const favourites = localStorage.getItem('favourites')
  ? JSON.parse(localStorage.getItem('favourites'))
  : [];

function App() {
  const store = createStore(stockReducer);
  store.subscribe(() => {
    localStorage.setItem(
      'favourites',
      JSON.stringify(store.getState().favourites)
    );
  });

  store.dispatch(dataFetched(stocks));
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
