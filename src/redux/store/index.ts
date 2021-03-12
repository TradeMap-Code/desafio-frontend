import { createStore } from 'redux';
import stateReducer from '../modules/state/reducer';

const store = createStore(stateReducer);

export default store;