import React, { useState, useRef } from "react";
import axios from "axios";
import "./tempo.scss";
import { FaBars, FaTimes } from "react-icons/fa";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `http://api.weatherapi.com/v1/current.json?key=4b32f787403b469b960145213211612&q=são paulo&lang=pt`;
  const navRef = useRef();
  const searchLocation = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };

  return (
    <div className="container">
      <div className="search">
        <button
          onClick={searchLocation}
          placeholder="Enter Location"
          type="text"
          className="nav-btn nav-close-btn close"
          id="input"
        >
          <FaTimes />
        </button>

        {/* <button className="nav-btn" onClick={searchLocation}>
          <FaBars />
        </button> */}
      </div>
      <div className="container">
        <div className="top">
          <div className="description">
            {data.location ? <h1>{data.location.name}</h1> : null}
            <br />
            {data.location ? <h1>{data.current.condition.text}</h1> : null}
            <img
              src={data.location ? data.current.condition.icon : null}
            />{" "}
            <br />
            {data.location ? data.current.humidity : null} <br />
            {data.location ? data.current.temp_c : null}
            {data.location ? <h1>{data.location.localtime}</h1> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
