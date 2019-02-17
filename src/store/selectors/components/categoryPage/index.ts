import get from 'lodash/get';
import some from 'lodash/some';
import {ICategory, IProduct} from '../../../../facades/gousto/types';

export function getProducts(state: any, categoryId?: string): IProduct[]  {
  const products = get(state, 'components.categoryPage.data');

  if (categoryId) {
    return products.filter((product: IProduct): boolean => some(product.categories, (category: ICategory) => {
      return category.id === categoryId;
    }))
  }

  return products
}
