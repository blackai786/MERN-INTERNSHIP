import React from "react";
import { useState } from "react";

export const Country = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const countryData = {
    India: ["Gujarat", "Maharashtra", "Rajasthan", "Punjab"],
    USA: ["California", "Texas", "Florida", "New York"],
    Canada: ["Ontario", "Quebec", "Alberta", "British Columbia"],
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState("");
  };

  return (
    <div style={{ color: "skyblue" }}>
      <h2>Country and State Selector</h2>

      <label>Select Country: </label>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">-- Select Country --</option>
        {Object.keys(countryData).map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>

      <br />
      <br />

      {selectedCountry && (
        <>
          <label>Select State: </label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">-- Select State --</option>
            {countryData[selectedCountry].map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </>
      )}

      <br />
      <br />

      {selectedCountry && selectedState && (
        <h3>
          You selected: {selectedCountry} - {selectedState}
        </h3>
      )}
    </div>
  );
};
