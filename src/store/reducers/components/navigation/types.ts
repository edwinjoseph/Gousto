import { ICategory } from '../../../../facades/gousto/types';

export enum EnumCategoriesType {
  GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE',
  GET_CATEGORIES_PENDING = 'GET_CATEGORIES_PENDING',
  GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS',
}

export interface ICategoriesState {
  isLoading: boolean;
  status?: 'ok' | 'failed';
  data: ICategory[];
}

export interface ICategoriesAction {
  type: EnumCategoriesType;
  payload: ICategoriesState;
}
