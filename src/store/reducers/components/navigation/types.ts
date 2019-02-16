import { ICategory } from '../../../../facades/gousto/types';

export enum EnumNavigationType {
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS,
}

export interface INavigationState {
  isLoading: boolean;
  status?: 'ok' | 'failed';
  data: ICategory[];
}

export interface INavigationAction {
  type: EnumNavigationType;
  payload: INavigationState;
}
