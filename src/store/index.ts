import {createStore} from 'redux'
import { IFavoriteState } from './modules/favorites/reducer'

import rootReducer from './modules/rootReducer'

export interface IState {
  favorites: IFavoriteState
}

const store = createStore(rootReducer)

export {store}
