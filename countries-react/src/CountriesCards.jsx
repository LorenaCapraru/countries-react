import React from "react";

export default function CountriesCards(props) {
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
    <div className="cardsContainer">
      {props.data.map((country) => createCard(country))}
    </div>
  );
}
