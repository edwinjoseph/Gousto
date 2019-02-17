import * as React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router';
import configureMockStore from 'redux-mock-store';
import categories from './fixtures/categories.json';
import products from './fixtures/products.json';

export function noop(mock?: any) {
  return () => {
    if (mock) {
      return mock;
    }
  }
}

export function withRouter(component: JSX.Element): JSX.Element {
  const initialState = {
    components: {
      categoryPage: {
        data: products,
        isLoading: true,

      },
      navigation: {
        data: categories,
        isLoading: true,
      }
    }
  };
  const mockStore = configureMockStore([]);
  return (
    <MemoryRouter>
      <Provider store={mockStore(initialState)}>
        {component}
      </Provider>
    </MemoryRouter>
  )
}
