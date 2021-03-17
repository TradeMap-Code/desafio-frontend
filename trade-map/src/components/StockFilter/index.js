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
      <div className="filter-title">
        <h3>Ordenação por:</h3>
      </div>
      <div>
        {priceOrder === 'asc' ? (
          <h4 className="arrow pointer" onClick={() => sortByPrice('des')}>
            Preço{' '}
            <span>
              <i className="fas fa-arrow-down"></i>
            </span>
          </h4>
        ) : (
          <h4 className="arrow pointer" onClick={() => sortByPrice('asc')}>
            Preço{' '}
            <span>
              <i className="fas fa-arrow-up"></i>
            </span>
          </h4>
        )}

        {variationOrder === 'asc' ? (
          <h4 className="arrow pointer" onClick={() => sortByVariation('des')}>
            Variação{' '}
            <span>
              <i className="fas fa-arrow-down"></i>
            </span>
          </h4>
        ) : (
          <h4 className="arrow pointer" onClick={() => sortByVariation('asc')}>
            Variação{' '}
            <span>
              <i className="fas fa-arrow-up"></i>
            </span>
          </h4>
        )}
      </div>
    </div>
  );
};

export default StockFilter;
