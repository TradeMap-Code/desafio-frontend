import Routes from './routes';
import stocks from './stocks.json';
import { Provider, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import stockReducer from './reducers';

import './assets/styles/global.css';
import { dataFetched } from './actions';

function App() {
  const store = createStore(stockReducer);
  //const dispatch = useDispatch();

  store.dispatch(dataFetched(stocks));
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
