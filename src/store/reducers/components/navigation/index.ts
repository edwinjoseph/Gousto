import {
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS,
} from '../../../actions/components/navigation';

export default function (state = { isLoading: true, data: []}, action: any) {
  switch (action.type) {
    case GET_CATEGORIES_PENDING: {
      return action.payload;
    }
    case GET_CATEGORIES_SUCCESS: {
      return action.payload;
    }
    case GET_CATEGORIES_FAILURE: {
      return action.payload;
    }
    default:
      return state;
  }
}
