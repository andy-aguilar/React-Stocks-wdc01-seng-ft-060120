import React from 'react'

const Stock = (props) => {

  const { name, price } = props.stock

  return(
  <div>

    <div
      className="card" 
      onClick={() => props.tradeStock(props.stock, props.action) }
    >
      <div className="card-body">
        <h5 className="card-title">{ name }</h5>
        <p className="card-text">{ price }</p>
      </div>
    </div>


  </div>
  )
};

export default Stock
