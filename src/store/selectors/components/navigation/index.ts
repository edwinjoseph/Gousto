import get from 'lodash/get';
import {ICategory} from '../../../../facades/gousto/types';

export function getCategories (state: any, categoryId?: string): ICategory | ICategory[] | undefined {
  const categories = get(state, 'components.navigation.data');

  if (categoryId) {
    return categories.find((category: ICategory) => category.id === categoryId);
  }

  return categories
}
