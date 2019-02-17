import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { App } from '../../src/App';
import CategoryPage from '../../src/components/CategoryPage';
import Header from '../../src/components/Header';
import categories from '../fixtures/categories.json';
import products from '../fixtures/products.json';
import { noop } from '../helpers';

const defaultProps = {
  match: {
    params: {
      categoryTitle: ''
    }
  }
};

function getWrapper(props: any = defaultProps, options: any = {}): ShallowWrapper {
  return shallow(
    <App
      initializeCategories={noop(categories)}
      initializeProducts={noop(products)}
      {...props}
    />,
    options
  );
}

describe('src/App/index.tsx', () => {
  test('renders a loading component while fetching data', (done) => {
    const wrapper = getWrapper(undefined, {
      disableLifecycleMethods: true
    });
    expect(wrapper.text()).toEqual('Loading...');
    done();
  });
  test('renders a failed component when fetching data errored', (done) => {
    const wrapper = getWrapper().setState({
      hasErrored: true,
      isLoading: false,
    });
    expect(wrapper.text()).toEqual('Something went wrong.');
    done();
  });
  test('renders correctly when fetching data was successful', (done) => {
    const wrapper = getWrapper().setState({
      hasErrored: false,
      isLoading: false,
    }).update();

    expect(wrapper.find(Header).exists()).toEqual(true);
    expect(wrapper.find(CategoryPage).exists()).toEqual(true);
    done();
  });
});
