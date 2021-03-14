import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Header from '../../components/Header';
import '@testing-library/jest-dom/extend-expect';

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


describe('Header Component', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should be able to go to the list page', () => {
    mockedHistoryLocation.mockReturnValue({
      pathname: '/favorites',
    });
    const { getByText } = render(<Header />);
    
    const listPageButton = getByText('List');

    fireEvent.click(listPageButton);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/');
  });

  it('should be able to go to the favorites page', () => {
  
    const { getByText } = render(<Header />);
    
    const favoritesPageButton = getByText('Favorites');

    fireEvent.click(favoritesPageButton);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/favorites');
  });
});