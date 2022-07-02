import { fetchDetails } from '../service/ApiRequest';

const DETAILS = 'weather/searchApi/DETAILS';

// Reducer
const detailsApi = (state = {}, action = {}) => {
  switch (action.type) {
    case DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export const getDetails = (lat, lon) => async (dispatch) => {
  const fetchDetail = await fetchDetails(lat, lon);
  const { main, components, dt } = fetchDetail.list[0];
  const filterData = {
    aqi: main.aqi,
    carbon: components.co,
    nitrogen: components.no2,
    nitrogenO: components.no,
    ozone: components.o3,
    sp: components.pm2_5,
    suspendedP: components.pm10,
    sulphur: components.so2,
    ammonia: components.nh3,
    dt,
  };
  dispatch({ type: DETAILS, payload: filterData });
};

export default detailsApi;
