import React, { useState } from "react";

export default function CountriesCards(props) {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  function filterSearch() {
    let filterData = [];
    filterData = props.data.filter(
      (country) =>
        country.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        country.capital.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filterData.map((el) => createCard(el));
  }

  const [dropDown, setDropDown] = useState("");

  function createCard(country) {
    return (
      <div className="cardContainer">
        <img
          alt="flag of the country"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png"
        />
        <h1 className="countryName">{country["name"]}</h1>
        <div className="countryDetails">
          <p>
            <b>Population: </b>
            {country.population}
          </p>
          <p>
            <b>Region: </b>
            {country.region}
          </p>
          <p>
            <b>Capital: </b>
            {country.capital}
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <div>
        <div className="searchDropDown">
          <label>Search for a Country:</label>
          <input
            className="searchBar"
            type="search"
            value={searchInput}
            onChange={handleChange}
          />
        </div>
        <input type="select" value={dropDown} onChange={setDropDown} />
      </div>
      <div className="cardsContainer">{filterSearch()}</div>
    </>
  );
}
