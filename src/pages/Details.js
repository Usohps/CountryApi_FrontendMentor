import React from "react";
import { Link } from "react-router-dom";
export default function Details({
  flags,
  name,
  population,
  region,
  subregion,
}) {
  return (
    <Link to={`/${name.common}`}>
      <div className="">
        <article className=" w-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <img
            src={flags.svg}
            className="w-screen h-64 object-cover rounded-t-lg"
            alt=""
          />
          <div className="max-md:250px bg-white m-auto p-4 rounded-b-lg">
            <h2 className="font-bold text-2xl ">{name.common}</h2>
            <ul>
              <li>Population: {population.toLocaleString()}</li>
              <li>Region: {region}</li>
              <li>Subregion: {subregion}</li>
            </ul>
          </div>
        </article>
      </div>
    </Link>
  );
}
