/* eslint-disable react/prop-types */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import ApiReducer from '../redux/SearchApi';
import detailsApi from '../redux/Polution';

const render = (
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        countries: ApiReducer,
        airPollution: detailsApi,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
    </Provider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
