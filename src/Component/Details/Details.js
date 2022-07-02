import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BiCaretLeft } from 'react-icons/bi';
import './details.css';

const Details = () => {
  const navigate = useNavigate();
  const backBtn = () => {
    navigate('/');
  };
  const data = useSelector((state) => state.airPollution);
  const {
    carbon,
    nitrogen,
    nitrogenO,
    ozone,
    sp,
    suspendedP,
    sulphur,
    ammonia,
  } = data;
  return (
    <section className="table">
      <BiCaretLeft onClick={backBtn} size={35} />
      <header>
        <h2>Pollutant components</h2>
      </header>
      <article className="container-p">
        <div className="flex">
          <p> Carbon monoxide (CO)</p>
          <p>{carbon}</p>
        </div>
        <div className="flex">
          <p> Nitrogen monoxide (NO)</p>
          <p>{nitrogenO}</p>
        </div>
        <div className="flex">
          <p> Nitrogen dioxide (NO2)</p>
          <p>{nitrogen}</p>
        </div>
        <div className="flex">
          <p> Ozone (O3)</p>
          <p>{ozone}</p>
        </div>
        <div className="flex">
          <p> Sulphur dioxide (SO2)</p>
          <p>{sulphur}</p>
        </div>
        <div className="flex">
          <p> Suspended Particles (Pm2.5)</p>
          <p>{sp}</p>
        </div>
        <div className="flex">
          <p> Suspended Particles (Pm10)</p>
          <p>{suspendedP}</p>
        </div>
        <div className="flex">
          <p> Ammonia (NH3)</p>
          <p>{ammonia}</p>
        </div>
      </article>
    </section>
  );
};

export default Details;
