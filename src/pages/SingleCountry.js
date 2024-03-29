import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function SingleCountry() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };
    getSingleCountry();
  }, [name]);
  return (
    <>
      <section className="bg-gray-200">
        {country.map((item) => (
          <div
            key={item.population}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-8 place-items-center h-screen"
          >
            <div>
              <img src={item.flags.svg} className="h-64 rounded" alt="" />
            </div>
            <div className="container m-auto px-6 md:px-0">
              <h1 className=" font-bold text-gray-500 text-4xl">
                {item.name.official}
              </h1>
              <ul className="w-full border flex flex-col items-start justify-start gap-2 text-slate-700 ">
                <li>Capital: {item.capital[0]}</li>
                <li>Population: {item.population.toLocaleString()}</li>
                <li>Region: {item.region}</li>
                {item.subregion && <div>
                    <li>Subregion: {item.subregion}</li>
                    </div>}
              </ul>
              {item.borders && (
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 ">Borders:</h3>
                  <ul className="flex flex-wrap gap-2">
                    {item.borders.map((border, index) => (
                      <li key={index} className="bg-white p-1 rounded tracking-wide text-sm shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] font-semibold">{border}</li>
                    ))}
                  </ul>
                </div>
              )}

              <Link to="/" className="inline-block py-2 px-6 rounded shadow text-gray mt-3">&larr; Back</Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
