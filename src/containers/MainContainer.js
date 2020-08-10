import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const BASEURL = "http://localhost:3000/stocks"

class MainContainer extends Component {
  state={
    stocks: [],
    displayStocks: [],
    portfolio: [],
    displayPortfolio: [],
    sortBy: "None",
    filterBy: "",

  }

  componentDidMount(){
    fetch(BASEURL)
    .then(resp => resp.json())
    .then(stocks => {
      this.setState({
        stocks,
        displayStocks: stocks
      })
    })
  }

  tradeStock = (stock, action) => {
    if(!this.state.portfolio.includes(stock) && action === "buy"){
    this.setState({
      portfolio: [...this.state.portfolio, stock],
      displayPortfolio: [...this.state.displayPortfolio, stock]
    })}
    else if (this.state.portfolio.includes(stock) && action === "sell"){
      this.setState({
        portfolio: [...this.state.portfolio].filter(oldStock => oldStock !== stock),
        displayPortfolio: [...this.state.displayPortfolio].filter(oldStock => oldStock !== stock)
      })
    }
    else{
      return
    }
  }

  setSortBy = (sortBy) => {
    this.setState({
      sortBy
    }, this.sortStocks)
    
  }

  sortStocks = () => {
    if (this.state.sortBy === "Alphabetically"){
      this.setState({
        displayStocks: [...this.state.displayStocks].sort((stock1, stock2) => stock1.name < stock2.name ? -1 : 1) 
      })
    }
    if (this.state.sortBy === "Price"){
      this.setState({
        displayStocks: [...this.state.displayStocks].sort((stock1, stock2) => stock1.price - stock2.price) 
      })
    }
    else {
      return
    }
  }

  setFilterBy = (filterBy) => {
    this.setState({
      filterBy
    }, this.handleFilter)
  }

  handleFilter = () => {
    if (this.state.filterBy === "None"){
      this.setState({
        displayStocks: [...this.state.stocks]
      }, this.sortStocks)
    }
    else{
      this.setState({
        displayStocks: [...this.state.stocks].filter(stock => stock.type === this.state.filterBy)
      }, this.sortStocks)
    }
  }

  render() {
    return (
      <div>
        <SearchBar
          setSortBy={this.setSortBy}
          sortBy={this.state.sortBy}
          setFilterBy={this.setFilterBy}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={ this.state.displayStocks }
                tradeStock={ this.tradeStock }
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                portfolio={this.state.displayPortfolio}
                tradeStock={ this.tradeStock }
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
