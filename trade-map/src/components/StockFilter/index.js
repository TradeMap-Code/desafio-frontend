import React from 'react';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { setPriceOrder, setVariationOrder } from '../../actions';

const StockFilter = ({ stocks, page }) => {
  const priceOrder = useSelector((state) => state.priceOrder);
  const variationOrder = useSelector((state) => state.variationOrder);
  const dispatch = useDispatch();
  let sortedStocks = stocks;
  const setPriceOrder2 = (order, page, sortedStocks) => {
    dispatch(setPriceOrder(order, page, sortedStocks));
  };
  const setVariationOrder2 = (order, page, sortedStocks) => {
    dispatch(setVariationOrder(order, page, sortedStocks));
  };

  const sortByPrice = (order) => {
    order === 'asc'
      ? ((sortedStocks = stocks.sort((a, b) => a.price - b.price)),
        setPriceOrder2('asc', page, sortedStocks))
      : ((sortedStocks = stocks.sort((a, b) => b.price - a.price)),
        setPriceOrder2('des', page, sortedStocks));
    console.log('aaaa', sortedStocks);
  };

  const sortByVariation = (order) => {
    order === 'asc'
      ? ((sortedStocks = stocks.sort((a, b) => a.variation - b.variation)),
        setVariationOrder2('asc', page, sortedStocks))
      : ((sortedStocks = stocks.sort((a, b) => b.variation - a.variation)),
        setVariationOrder2('des', page, sortedStocks));
  };

  return (
    <div className="chart-filter">
      {priceOrder === 'asc' ? (
        <h2 className="arrow" onClick={() => sortByPrice('des')}>
          Price(des)
        </h2>
      ) : (
        <h2 className="arrow" onClick={() => sortByPrice('asc')}>
          Price(asc)
        </h2>
      )}

      {variationOrder === 'asc' ? (
        <h2 className="arrow" onClick={() => sortByVariation('des')}>
          Variation(desc)
        </h2>
      ) : (
        <h2 className="arrow" onClick={() => sortByVariation('asc')}>
          Variation(asc)
        </h2>
      )}
    </div>
  );
};

export default StockFilter;
