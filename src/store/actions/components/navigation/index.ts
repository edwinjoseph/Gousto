import { ICategory } from '../../../../facades/gousto/types';
import { EnumCategoriesType, ICategoriesAction } from '../../../reducers/components/navigation/types';

export function getCategoriesPending(): ICategoriesAction {
  return {
    payload: {
      data: [],
      isLoading: true,
    },
    type: EnumCategoriesType.GET_CATEGORIES_PENDING,
  }
}

export function getCategoriesSuccess(data: ICategory[]): ICategoriesAction {
  return {
    payload: {
      data,
      isLoading: false,
      status: 'ok',
    },
    type: EnumCategoriesType.GET_CATEGORIES_SUCCESS,
  }
}

export function getCategoriesFailure(): ICategoriesAction {
  return {
    payload: {
      data: [],
      isLoading: false,
      status: 'failed',
    },
    type: EnumCategoriesType.GET_CATEGORIES_FAILURE,
  }
}
