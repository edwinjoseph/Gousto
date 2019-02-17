import { getProducts as getProductsFacade } from '../../../../facades/gousto/products';
import {
  getProductsFailure,
  getProductsPending,
  getProductsSuccess
} from '../../../actions/components/categoryPage';

export function fetchProducts(dispatch: any) {
  return async function dispatcher() {
    dispatch(getProductsPending());
    try {
      const products = await getProductsFacade();
      dispatch(getProductsSuccess(products.body.data));
      return products.body.data;
    } catch (error) {
      dispatch(getProductsFailure());
      throw error;
    }
  }
}
