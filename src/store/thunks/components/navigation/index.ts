import { getCategories as getCategoriesFacade } from '../../../../facades/gousto/categories';
import {
  getCategoriesFailure,
  getCategoriesPending,
  getCategoriesSuccess,
} from '../../../actions/components/navigation';

export function fetchCategories(dispatch: any) {
  return async function dispatcher() {
    dispatch(getCategoriesPending());
    try {
      const categories = await getCategoriesFacade();
      dispatch(getCategoriesSuccess(categories.body.data));
      return categories.body.data;
    } catch (error) {
      dispatch(getCategoriesFailure());
      throw error;
    }
  }
}
