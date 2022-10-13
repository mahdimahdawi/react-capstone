/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MdLocationOn, MdCloseFullscreen } from 'react-icons/md';
import { GiModernCity, GiHumanTarget, GiDeathSkull } from 'react-icons/gi';
import { FaSearchLocation, FaChartArea } from 'react-icons/fa';
import { FcPositiveDynamic } from 'react-icons/fc';
import { GrUpdate } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { SiSogou } from 'react-icons/si';
import { RiDeviceRecoverLine } from 'react-icons/ri';
import { TbWorldLongitude } from 'react-icons/tb';

import './CSS/style.css';

const CountryInformation = () => {
  const [statePending, updateState] = useState(false);
  const [All, updateAll] = useState({});
  const state = useSelector((state) => state.cases);
  const { filterCountry, pending } = state;
  useEffect(() => {
    if (!pending) {
      updateAll(filterCountry[0].All);
      updateState(true);
    }
  }, [pending, All]);

  return (
    <>
      {statePending ? (
        <div className="country-info">
          <Link className="back-btn" to="/">
            {<BiArrowBack />}
          </Link>
          <h1>Country Information</h1>
          <p>
            <GrUpdate className="back-btn" /> Last updated:{" "}
            <span>{All.updated}</span>
          </p>
          <h2>
            {All.country} <span>({All.abbreviation})</span>
          </h2>
          <div className="count-info">
            <p>
              <MdLocationOn /> Continent: <span>{All.continent}</span>
            </p>
            <p>
              <GiModernCity /> Capital city: <span>{All.capital_city}</span>
            </p>
            <p>
              <FaSearchLocation /> Location: <span>{All.location}</span>
            </p>
            <p>
              <FaChartArea /> Area covered: <span>{All.sq_km_area}</span>
            </p>
            <p>
              <GiHumanTarget /> Population: <span>{All.population}</span>
            </p>
            <p>
              <SiSogou /> ISO: <span>{All.iso}</span>
            </p>
            <p>
              <FcPositiveDynamic /> Confirmed cases:{" "}
              <span>{All.confirmed}</span>
            </p>
            <p>
              <RiDeviceRecoverLine /> Recovered: <span>{All.recovered}</span>
            </p>
            <p>
              <GiDeathSkull /> Deaths: <span>{All.deaths}</span>
            </p>
            <p>
              <MdCloseFullscreen /> lat: <span>{All.lat}</span>
            </p>
            <p>
              <TbWorldLongitude /> long: <span>{All.long}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="fetch-data">
          <h1>Fetching data...</h1>
          <div class="loader">
            <div class="inner one"></div>
            <div class="inner two"></div>
            <div class="inner three"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryInformation;
