import { IProduct } from '../../../../facades/gousto/types';

export enum EnumProductType {
  GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE',
  GET_PRODUCTS_PENDING = 'GET_PRODUCTS_PENDING',
  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
}

export interface IProductState {
  isLoading: boolean;
  status?: 'ok' | 'failed';
  data: IProduct[];
}

export interface IProductAction {
  type: EnumProductType;
  payload: IProductState;
}
