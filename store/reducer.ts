import { Slug } from '../types';
import {
  FETCH_SLUG_FAILURE,
  FETCH_SLUG_REQUEST,
  FETCH_SLUG_SUCCESS,
  OPEN_MODAL,
  CLOSE_MODAL,
  UNSET_ERROR,
} from './actions';
import { initialState, SlugcloudState } from './init';

const reducer = (state = initialState, action): SlugcloudState => {
  switch (action.type) {
    case FETCH_SLUG_SUCCESS:
      return {
        ...state,
        slugs: state.slugs.concat(action.payload as Slug),
      };
    case FETCH_SLUG_FAILURE:
      return {
        ...state,
        error: action.payload.message,
      };
    case UNSET_ERROR:
      return {
        ...state,
        error: '',
      };
    case OPEN_MODAL:
      return {
        ...state,
        portals: state.portals.concat(action.payload),
      };
    case CLOSE_MODAL:
      return {
        ...state,
        portals: [],
      };
    case FETCH_SLUG_REQUEST:
    default:
      return state;
  }
};

export default reducer;
