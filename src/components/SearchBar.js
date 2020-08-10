import React from 'react';

const SearchBar = (props) => {

  const { sortBy, setSortBy, setFilterBy } = props

  return (
    <div>

      <strong>Sort by: </strong>
      <label>
        <input type="radio" value="Alphabetically" checked={ sortBy === "Alphabetically" } onChange={(e) => setSortBy(e.target.value)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={ sortBy === "Price" } onChange={ (e) => setSortBy(e.target.value) }/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => setFilterBy(e.target.value)}>
          <option value="None">None</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
