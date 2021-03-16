import Favorites from '../../pages/Favorites';
import Stocks from '../../data/stocks.json';
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// Import your own reducer
import reducer from '../../redux/modules/state/reducer';

const mockedHistoryPush = jest.fn();
const mockedHistoryLocation = jest.fn().mockReturnValue({
  pathname: '/'
})

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
      location: mockedHistoryLocation,
    }),
  };
});

function render(
  ui: JSX.Element,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {} as any
) {
  function Wrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}


describe('Favorites Page', () => {
  it('should be able to list favorites stocks', async () => {
    const { getByTestId } = render(<Favorites />, { initialState: {
      priceOrderInverse: false,
      variationOrderInverse: false,
      favoritesStocks: ['PETR4', 'ITUB3'],
      stocks: Stocks,
      theme: 'themeDark',
    }})
    
    const stocks = [getByTestId('PETR4'), getByTestId('ITUB3')];
    expect(stocks).toHaveLength(2);
  });

  it('should be able to display no favorites stocks message', async () => {
    const { getByText } = render(<Favorites />, { initialState: {
      priceOrderInverse: false,
      variationOrderInverse: false,
      favoritesStocks: [],
      stocks: Stocks,
      theme: 'themeDark',
    }})
    
    const divMessage = getByText('No Favorites stocks');

    expect(divMessage.textContent).toBe('No Favorites stocks');
  });
});