import React from 'react';
import Stock from '../components/Stock'

const StockContainer = (props) => {

  const renderStocks = () => {
    return props.stocks.map(stock => <Stock stock={ stock } tradeStock={ props.tradeStock } action={"buy"}/>)
  }
  return (
    <div>
      <h2>Stocks</h2>
      { renderStocks() }
    </div>
  );
}



export default StockContainer;
