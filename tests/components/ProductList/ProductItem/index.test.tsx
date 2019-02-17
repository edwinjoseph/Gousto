import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';
import ProductItem from '../../../../src/components/ProductList/ProductItem';
import products from '../../../fixtures/products.json';

const defaultProps = products[0];

function getWrapper(props: any = defaultProps, options: any = {}): ShallowWrapper {
  return shallow(
    <ProductItem
      {...props}
    />,
    options
  )
}

describe('src/components/ProductList/ProductItem/index.tsx', () => {
  test('renders correctly', (done) => {
    const wrapper = getWrapper();
    expect(wrapper.find('img').exists()).toEqual(true);
    expect(wrapper.find('.title').text()).toEqual(defaultProps.title);
    expect(wrapper.find('.description').text()).toEqual(defaultProps.description);
    expect(wrapper.state('active')).toEqual(false);
    done();
  })
});
