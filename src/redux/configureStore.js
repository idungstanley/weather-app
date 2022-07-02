import { configureStore } from '@reduxjs/toolkit';
import ApiReducer from './SearchApi';
import detailsApi from './Polution';

const store = configureStore({
  reducer: { countries: ApiReducer, airPollution: detailsApi },
});

export default store;
