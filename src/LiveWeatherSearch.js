import React, { useState } from "react";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";
import "./App.css";
import { useEffect } from "react";

const LiveWeatherSearch = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=32cbc643fb378b9b1100a7888197680a`;
      const response = await fetch(url);

      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="card">
        <div className="search">
          <input
            type="search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            className="inputField"
            placeholder="Mumbai"
          />
        </div>

        {!city ? (
          <p className="notFound">
            <NotListedLocationIcon className="NotListedLocationIcon" />
            No Data Found
          </p>
        ) : (
          <div className="info">
            <div className="cityname">
              <LocationCityIcon className="locationIcon" />
              <br />
              {search}
            </div>

            <h1 className="temp">{city.temp} *C</h1>
            <h3 className="min_max_temp">
              Min: {city.temp_min} *C| max:{city.temp_max} *C
            </h3>
          </div>
        )}

        <div className="wave1"></div>
        <div className="wave2"></div>
        <div className="ballBounce"></div>
        <div className="ballBounce1"></div>
        <div className="ballBounce2"></div>
      </div>
    </>
  );
};

export default LiveWeatherSearch;
