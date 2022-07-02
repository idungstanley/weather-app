import getCountryData from '../service/ApiRequest';
// Actions
const CONTINENT = 'weather/searchApi/CONTINENT';
const SEARCH = 'weather/searchApi/SEARCH';

// Reducer
const ApiReducer = (state = [], action = {}) => {
  switch (action.type) {
    case CONTINENT:
      return action.payload;
    case SEARCH:
      return action.payload;
    default:
      return state;
  }
};

// Action creation
export const loadApiData = () => async (dispatch) => {
  const RegionApi = await getCountryData();
  const filterRegionData = RegionApi.map(
    ({
      name: countryName,
      latlng,
      coatOfArms,
      continents,
      flags,
      maps,
      population,
      timezones,
      ccn3: id,
    }) => ({
      countryName: countryName.common,
      population,
      maps: maps.googleMaps,
      timezones,
      lat: latlng[0],
      lon: latlng[1],
      coatOfArms: coatOfArms.png,
      continents,
      flags: flags.png,
      id,
    }),
  );
  dispatch({ type: CONTINENT, payload: filterRegionData });
};

export const searchCountry = (getvalue) => (dispatch, getState) => {
  const { countries } = getState();
  const AllCountries = countries;
  const filteredArr = AllCountries.filter(({ countryName }) => countryName.toLowerCase()
    .includes(getvalue.toLowerCase()));
  dispatch({ type: SEARCH, payload: filteredArr });
};

export default ApiReducer;
