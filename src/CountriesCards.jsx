import React, { useState } from "react";

export default function CountriesCards(props) {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  function filterSearch() {
    let filterData = [];
    filterData = props.data.filter((country) =>
      country.name.includes(searchInput)
    );
    return filterData.map((el) => createCard(el));
  }

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
      <input
        className="searchBar"
        type="search"
        value={searchInput}
        onChange={handleChange}
      />
      <div className="cardsContainer">{filterSearch()}</div>
    </>
  );
}
