import {ItemsActionTypes} from '../../interfaces/items';

export const initState = payload => ({
  type: ItemsActionTypes.INIT_STATE,
  payload,
});
