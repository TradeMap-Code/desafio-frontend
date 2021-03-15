interface Stock {
  stock: string;
  exchange: string;
  country: string;
  company: string;
  variation: number;
  price: number;
  chart: number[];
}


export interface State {
  priceOrderInverse: boolean;
  variationOrderInverse: boolean;
  favoritesStocks: string[];
  stocks: Stock[];
  theme: string;
}

export interface IState {
  state: State;
}