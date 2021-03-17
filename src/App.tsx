import React from 'react';
import GlobalStyled from "./styles/global";
import {Provider} from 'react-redux'
import { store } from './store';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes/>
      </Provider>
      <GlobalStyled/>
    </Router>
  );
}

export default App;
