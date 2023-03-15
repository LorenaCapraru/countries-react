import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function CountriesCards(props) {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  function filterSearch(data) {
    let filterData = [];
    if (selectChange === "Filter by Region")
      filterData = data.filter(
        (country) =>
          country.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          country.capital.toLowerCase().includes(searchInput.toLowerCase())
      );
    else
      filterData = data
        .filter(
          (country) =>
            country.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            country.capital.toLowerCase().includes(searchInput.toLowerCase())
        )
        .filter((el) => el.region === selectChange);
    return filterData.map((el) => createCard(el));
  }

  const [selectChange, setSelectChange] = useState("Filter by Region");
  const handleSelectChange = (e) => {
    e.preventDefault();
    setSelectChange(e.target.value);
  };

  function filteredList(data) {
    return selectChange === "Filter by Region"
      ? data.map((el) => createCard(el))
      : data
          .filter((el) => el.region === selectChange)
          .map((el) => createCard(el));
  }

  function createOptions() {
    let newArr = [];
    let lastArr = [];
    [...props.data].map((el) => newArr.push(el.region));
    lastArr = newArr.filter(
      (element, index) => newArr.indexOf(element) === index
    );
    return lastArr.map((el) => <option>{el}</option>);
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
      <div className="dropDownAndSelect">
        <div className="searchDropDown">
          <label>
            <i>Search for a Country: </i>
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
            <option>Filter by Region</option>
            {/* {props.data.map((el) => (
              <option>{el.region}</option>
            ))} */}
            {createOptions()}
          </select>
        </div>
      </div>
      {(!selectChange || selectChange === "Filter by Region") &&
      !searchInput ? (
        <div className="cardsContainer">
          {props.data.map((el) => createCard(el))}
        </div>
      ) : (
        <div className="cardsContainer">
          {(filteredList(props.data), filterSearch(props.data))}
        </div>
      )}
      {/* <div className="cardsContainer">{filteredList(props.data)}</div> */}
    </>
  );
}
