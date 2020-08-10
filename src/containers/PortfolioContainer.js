import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderStocks = () => {
    return this.props.portfolio.map( stock => <Stock stock={stock} tradeStock={ this.props.tradeStock } action={"sell"}/> ) 
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          { this.renderStocks() }
      </div>
    );
  }

}

export default PortfolioContainer;
