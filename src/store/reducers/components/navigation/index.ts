import { EnumCategoriesType, ICategoriesAction, ICategoriesState } from './types';

export default function (
  state: ICategoriesState = { isLoading: true, data: []},
  action: ICategoriesAction): ICategoriesState {
  switch (action.type) {
    case EnumCategoriesType.GET_CATEGORIES_PENDING: {
      return action.payload;
    }
    case EnumCategoriesType.GET_CATEGORIES_SUCCESS: {
      return action.payload;
    }
    case EnumCategoriesType.GET_CATEGORIES_FAILURE: {
      return action.payload;
    }
    default:
      return state;
  }
}
