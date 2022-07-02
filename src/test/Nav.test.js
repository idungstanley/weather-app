import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Navbar from '../Component/Nav/Navbar';

describe('Render components', () => {
  test('render Nav', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </Router>,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
