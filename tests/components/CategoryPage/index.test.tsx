import {mount, ReactWrapper, shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';
import { CategoryPage } from '../../../src/components/CategoryPage';
import ProductList from '../../../src/components/ProductList';
import ProductSearch from '../../../src/components/ProductSearch';
import products from '../../fixtures/products.json';
import { noop } from '../../helpers';

const defaultProps = {
  categoryTitle: 'All items',
  filterItems: noop(),
  items: products,
};

function getWrapper(props: any = defaultProps, options: any = {}): { shallow: ShallowWrapper, mount: ReactWrapper } {
  return {
    mount: mount(<CategoryPage {...props} />),
    shallow: shallow(<CategoryPage {...props} />, options),
  }
}

describe('src/components/CategoryPage/index.tsx', () => {
  test('renders correctly', (done) => {
    const wrapper = getWrapper().shallow;
    expect(wrapper.find('.category-title').text()).toEqual(defaultProps.categoryTitle);
    expect(wrapper.find(ProductSearch).exists()).toEqual(true);
    expect(wrapper.find(ProductList).exists()).toEqual(true);
    done();
  });
  test('Updates search correctly', (done) => {
    const wrapper = getWrapper().mount;
    wrapper.find('.category-search input').simulate('change', { target: { value: 'Wine' }});
    expect(wrapper.state('searchValue')).toEqual('Wine');
    done();
  });
});
