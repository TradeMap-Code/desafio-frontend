import List from '../../pages/List';
import Stocks from '../../data/stocks.json';
import { render as rtlRender, waitFor } from '@testing-library/react'
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
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}


describe('List Page', () => {
  it('should be able to list all stocks', async () => {
    const { findByTestId } = render(<List />, { initialState: {
      priceOrderInverse: false,
      variationOrderInverse: false,
      favoritesStocks: [],
      stocks: Stocks,
      theme: 'themeDark',
    }})
    
    await waitFor(() => {
      const stocks: Promise<HTMLElement>[] = Stocks.map(async stock => await findByTestId(stock.stock));
      expect(stocks).toHaveLength(8)
    });
  });
});