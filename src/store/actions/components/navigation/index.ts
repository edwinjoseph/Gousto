import { ICategory } from '../../../reducers/components/navigation/types';

export const GET_CATEGORIES_PENDING = 'GET_CATEGORIES_PENDING';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';

export function getCategoriesPending() {
  return {
    payload: {
      data: [],
      isLoading: true,
    },
    type: GET_CATEGORIES_PENDING,
  }
}

export function getCategoriesSuccess(data: ICategory[]) {
  return {
    payload: {
      data,
      isLoading: false,
      status: 'ok',
    },
    type: GET_CATEGORIES_SUCCESS,
  }
}

export function getCategoriesFailure() {
  return {
    payload: {
      data: [],
      isLoading: false,
      status: 'failure',
    },
    type: GET_CATEGORIES_FAILURE,
  }
}
