import { ICategory } from '../../../../facades/gousto/types';
import {EnumNavigationType, INavigationAction} from '../../../reducers/components/navigation/types';

export function getCategoriesPending(): INavigationAction {
  return {
    payload: {
      data: [],
      isLoading: true,
    },
    type: EnumNavigationType.GET_CATEGORIES_PENDING,
  }
}

export function getCategoriesSuccess(data: ICategory[]): INavigationAction {
  return {
    payload: {
      data,
      isLoading: false,
      status: 'ok',
    },
    type: EnumNavigationType.GET_CATEGORIES_SUCCESS,
  }
}

export function getCategoriesFailure(): INavigationAction {
  return {
    payload: {
      data: [],
      isLoading: false,
      status: 'failed',
    },
    type: EnumNavigationType.GET_CATEGORIES_FAILURE,
  }
}
