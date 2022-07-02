/* eslint-disable react/prop-types */
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ApiReducer from '../redux/SearchApi';
import detailsApi from '../redux/Polution';

function RenderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore(
      {
        reducer: { countries: ApiReducer, airPollution: detailsApi },
      },
      preloadedState,
    ),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export default RenderWithProviders;
