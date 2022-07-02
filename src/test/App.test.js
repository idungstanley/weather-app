import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import WeatherApp from '../WeatherApp';

describe('test App components', () => {
  test('renders', () => {
    const tree = render(
      <Provider store={store}>
        <WeatherApp />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
