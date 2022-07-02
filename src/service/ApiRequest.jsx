import FetchRequest from '../helpers/fetchRequest';

export const countryName = 'London';
export const searchUrl = 'https://restcountries.com/v3.1/region/africa';
const getCountryData = async () => {
  const fetchData = new FetchRequest({ url: searchUrl });
  try {
    const searchResult = await fetchData.call();
    return searchResult;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchDetails = async (lat, lon) => {
  const details = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_KEY}`;
  const fetchApiDetails = new FetchRequest({ url: details });
  try {
    const data = await fetchApiDetails.call();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default getCountryData;
