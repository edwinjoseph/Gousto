import { EnumProductType, IProductAction, IProductState } from './types';

export default function (
  state: IProductState = { isLoading: true, data: []},
  action: IProductAction): IProductState {
  switch (action.type) {
    case EnumProductType.GET_PRODUCTS_PENDING: {
      return action.payload;
    }
    case EnumProductType.GET_PRODUCTS_SUCCESS: {
      return action.payload;
    }
    case EnumProductType.GET_PRODUCTS_FAILURE: {
      return action.payload;
    }
    default:
      return state;
  }
}

