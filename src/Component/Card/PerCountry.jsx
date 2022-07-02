import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import useRegion from '../../hooks/useRegion';
import { getDetails } from '../../redux/Polution';
import './card.css';

const PerCountry = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { region } = useRegion();
  const handleClick = (lat, lon) => {
    dispatch(getDetails(lat, lon));
    navigate('/Countries');
  };
  return region.map(
    ({
      id,
      countryName,
      population,
      maps,
      timezones,
      coatOfArms,
      continents,
      flags,
      lat,
      lon,
    }) => (
      <article className="card" key={id}>
        <div className="firstSection">
          <p className="countryName">{countryName}</p>
          <div className="fg">
            <img
              src={coatOfArms === undefined ? flags : coatOfArms}
              alt=""
              className="coa"
            />
          </div>
        </div>
        <div className="secondSection">
          <div className="details">
            <BsFillArrowRightCircleFill
              style={{ cursor: 'pointer', color: '#00A1E5' }}
              size={30}
              onClick={() => handleClick(lat, lon)}
            />
            <p className="font">
              Population:
              {population}
            </p>
            <p className="font">{timezones}</p>
            <p className="font">{continents}</p>
            <button type="button">
              <a href={maps} target="_blank" rel="noreferrer" className="map">
                View map
              </a>
            </button>
          </div>
          <img src={flags} alt="" className="flags" />
        </div>
      </article>
    ),
  );
};
export default PerCountry;
