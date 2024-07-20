import { useEffect, useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setsearch] = useState("");
  const [loading, setloading] = useState(false);
  const [wdata, setwdata] = useState("");

  async function fetchweather(param) {
    setloading(true);
    try {
      const response = await fetch(
        // `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=11b2bc9bb7c27f4504e1492d7a25bf8b`
       ` https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=11b2bc9bb7c27f4504e1492d7a25bf8b`
      );
      const data = response.json();

      if (data) {
        setwdata(data);
        setloading(false);
      }
    } catch (e) {
      console.log(e);
      setloading(false);
    }
  }

  function handlesearch() {
    fetchweather(search);
  }

  function getCurrentDate(){
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchweather("bangalore");
  }, []);
  // console.log(wdata)
  return (
    <div>
      <Search
        search={search}
        setsearch={setsearch}
        handlesearch={handlesearch}
      />

     

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
            {wdata?.name} <span>{wdata?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
          <span>{getCurrentDate()}</span>
            </div> 
            <div className="temp">{wdata?.main?.temp}</div>
          <p className="description">
            {wdata && wdata.weather && wdata.weather[0]
              ? wdata.weather[0].description
              : ""}
          </p>
          <div className="weather-info">
            <div className="column">
              <div>
                <p className="wind">{wdata?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div className="column">
              <div>
                <p className="humidity">{wdata?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
        </div>
        </div>
       
      )}
    </div>
  );
}
