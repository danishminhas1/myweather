import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <>
    <style>
      {`
      .custom-async-paginate {
        width: 500px;
        margin: 0 auto; /* Center the component horizontally */
        opacity: 0.7; /* Adjust the width as needed */
      }
      `}
    </style>
    <AsyncPaginate
    className="custom-async-paginate"
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
    </>
  );
};

export default Search;
