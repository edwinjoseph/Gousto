import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';
import StackGrid from "react-stack-grid";
import ProductList from '../../../src/components/ProductList';
import products from '../../fixtures/products.json';

const defaultProps = {
  items: products
};

function getWrapper(props: any = defaultProps, options: any = {}): ShallowWrapper {
  return shallow(
    <ProductList
      {...props}
    />,
    options
  )
}

describe('src/components/ProductList/index.tsx', () => {
  test('renders correctly', (done) => {
    const wrapper = getWrapper();
    expect(wrapper.find(StackGrid).exists()).toEqual(true);
    done();
  })
});
