import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import ProductSearch from '../../../src/components/ProductSearch';

const defaultProps = {
  value: ''
};

function getWrapper(props: any = defaultProps, options: any = {}): ShallowWrapper {
  return shallow(
    <ProductSearch
      {...props}
    />,
    options
  )
}

describe('src/components/CategoryPage/index.tsx', () => {
  test('renders correctly', (done) => {
    const wrapper = getWrapper();
    expect(wrapper.find('.category-search').text()).toEqual('Filter');
    expect(wrapper.find('input').exists()).toEqual(true);
    done();
  });
});
