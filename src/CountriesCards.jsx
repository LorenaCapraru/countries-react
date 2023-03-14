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

  const [selectChange, setSelectChange] = useState(props.data);
  const handleSelectChange = (e) => {
    e.preventDefault();
    setSelectChange(e.target.value);
  };

  function filteredList() {
    // let filterData = [];
    // filterData = props.data.filter((country) =>
    //   country.region.includes(selectChange.toLowerCase())
    // );
    // return filterData.map((el) => createCard(el));
    return props.data
      .filter((el) => el.region === selectChange)
      .map((el) => createCard(el));
  }

  function createOptions(data) {
    let newArray = data;
    return newArray.map((el) => <option>{el.region}</option>);
  }
  // console.log(createOptions);
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
      <div className="dropDownAndSelect">
        <div className="searchDropDown">
          <label>
            <i>Search for a Country:</i>
          </label>
          <input
            className="searchBar"
            type="search"
            value={searchInput}
            onChange={handleChange}
          />
        </div>
        <div className="dropdown">
          <select onChange={handleSelectChange}>
            <option>All region</option>
            {/* {selectChange.length === 0
              ? 
              : filteredList(props.data)} */}
            {createOptions(props.data)}
          </select>
        </div>
      </div>
      <div className="cardsContainer">{filterSearch()}</div>
      <div className="cardsContainer">{filteredList()}</div>
    </>
  );
}
