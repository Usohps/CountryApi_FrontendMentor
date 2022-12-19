// import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import Details from "./Details";
// import {GrSun,GrMoon} from "react-icons/gr"
function Home() {
  const regions = [
    {
      name: "Europe",
    },
    {
      name: "Asia",
    },
    {
      name: "Africa",
    },
    {
      name: "Oceania",
    },
    {
      name: "Americas",
    },
    {
      name: "Antarctic",
    },
  ];
  const [countries, setCountries] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg , setErrorMsg]= useState("")
  useEffect(() => {
    const getcountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };
    getcountries();
  }, []);

  async function searchCountry() {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${userInput}`
      );
      const data = await res.json();
      if (data.message) {
        setErrorMsg(data.message);
        console.log(data.message);
        console.log(error);
        console.log(errorMsg)
      }
      setCountries(data);
      console.log(errorMsg)
      console.log(data.data);
      console.log(countries);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function filterCountry(region) {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handlesearchInput(e) {
    e.preventDefault();
    searchCountry();
  }
  function handleFilterbyRegion(e) {
    e.preventDefault();
    filterCountry();
  }

  return (
    <>
      {error && (
        <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
          Please make sure you've entered a <em>valid country</em>
        </p>
      )}
      <div className="bg-gray-300">
        {!countries ? (
          <h1 className="font-bold uppercase text-gray-500 text-4xl h-screen flex items-center justify-center md:justify-between text-center tracking-wide">
            Loading Please wait....
          </h1>
        ) : (
          <section>
            <div className="flex flex-col md:flex-row md:items-center justify-between p-6 gap-4">
              <form autoComplete="off" onSubmit={handlesearchInput}>
                <input
                  type="text"
                  name="search"
                  id="search"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="search for a country by name"
                  required
                  className="w-64 px-4 py-2 rounded outline-none border-none shadow-xl"
                />
              </form>
              <form autoComplete="off" onSubmit={handleFilterbyRegion}>
                <select
                  name="filter-by-region"
                  id="filter-by-region"
                  value={regions.name}
                  onChange={(e) => filterCountry(e.target.value)}
                  className="w-52 py-3 px-6 outline-none shadow-xl rounded text-gray-600"
                >
                  {regions.map((region, index) => (
                    <option
                      value={region.name}
                      key={index}
                      className="rounded py-6 outline-none"
                    >
                      {region.name}
                    </option>
                  ))}
                </select>
              </form>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center p-4">
              {countries.map((country) => (
                <Details key={country.name.common} {...country} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default Home;
