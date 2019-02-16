import { EnumNavigationType, INavigationAction, INavigationState } from './types';

export default function (
  state: INavigationState = { isLoading: true, data: []},
  action: INavigationAction): INavigationState {
  switch (action.type) {
    case EnumNavigationType.GET_CATEGORIES_PENDING: {
      return action.payload;
    }
    case EnumNavigationType.GET_CATEGORIES_SUCCESS: {
      return action.payload;
    }
    case EnumNavigationType.GET_CATEGORIES_FAILURE: {
      return action.payload;
    }
    default:
      return state;
  }
}
