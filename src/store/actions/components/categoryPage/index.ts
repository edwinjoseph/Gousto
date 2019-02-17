import { IProduct } from '../../../../facades/gousto/types';
import { EnumProductType, IProductAction } from '../../../reducers/components/categoryPage/types';

export function getProductsPending(): IProductAction {
  return {
    payload: {
      data: [],
      isLoading: true,
    },
    type: EnumProductType.GET_PRODUCTS_PENDING,
  }
}

export function getProductsSuccess(data: IProduct[]): IProductAction {
  return {
    payload: {
      data,
      isLoading: false,
      status: 'ok',
    },
    type: EnumProductType.GET_PRODUCTS_SUCCESS,
  }
}

export function getProductsFailure(): IProductAction {
  return {
    payload: {
      data: [],
      isLoading: false,
      status: 'failed',
    },
    type: EnumProductType.GET_PRODUCTS_FAILURE,
  }
}
