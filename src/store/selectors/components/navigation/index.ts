import get from 'lodash/get';

export function getCategories (state: any) {
  return get(state, 'components.navigation.data')
}
