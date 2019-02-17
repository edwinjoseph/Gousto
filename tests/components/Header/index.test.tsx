import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Header } from '../../../src/components/Header';
import { LineItem } from '../../../src/components/Header/LineItem';
import categories from '../../fixtures/categories.json';
import { withRouter } from '../../helpers';

const defaultProps = {
  activeCategory: '',
  items: categories
};

function getWrapper(props: any = defaultProps, options: any = {}): ReactWrapper {
  return mount(
    withRouter(
      <Header
        {...props}
      />
    ),
    options
  );
}

describe('src/components/Header/index.tsx', () => {
  test('renders correctly', (done) => {
    const wrapper = getWrapper();
    expect(wrapper.find('.header-title').text()).toEqual('Gousto | Store Cupboard');
    expect(wrapper.find(LineItem).getElements().length).toEqual(13);
    done();
  });
});
